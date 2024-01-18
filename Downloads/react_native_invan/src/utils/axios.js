import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import settings from '@/config/settings';
import {refreshToken} from '@/features/auth';

const request = axios.create({
  baseURL: settings.baseURL,
});

request.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('access_token');

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // config.validateStatus = (status) => status < 500;

    return config;
  } catch (error) {
    console.error('Error reading access_token from AsyncStorage:', error);
    return Promise.reject(error);
  }
}, errorHandler);

request.interceptors.response.use(response => response.data, errorHandler);

export async function errorHandler(error) {
  if (error.response !== null) {
    // server responded with a status code that falls out of the range of 2xx
    if (error.response?.status === 403) {
      try {
        const rToken = await AsyncStorage.getItem('refresh_token');

        if (rToken !== null) {
          const res = await refreshToken({refresh: rToken});
          const {refresh, access} = res.data;
          await AsyncStorage.setItem('refresh_token', refresh);
          await AsyncStorage.setItem('access_token', access);
        }
      } catch (err) {
        console.error('Error refreshing tokens:', err);
        await AsyncStorage.removeItem('refresh_token');
        await AsyncStorage.removeItem('access_token');
      } finally {
        // Consider alternative ways to handle this in a React Native context
        // e.g., navigation or state management
        // window.location.reload();
      }
    }

    await Promise.reject(error.response);
  }
  if (error.request !== null) {
    // no response received from server
    await Promise.reject(error.request);
  }

  // something happened in setting up the request
  console.error(error.message);

  console.log('Error config object:', error.config);

  // Using toJSON you get an object with more information about the HTTP error
  console.log('\nError object as json:', error.toJSON());

  await Promise.reject(error);
}

export default request;
