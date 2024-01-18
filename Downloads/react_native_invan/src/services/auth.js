import settings from '../config/settings';

export const fetchLogin = async data => {
  try {
    const response = await fetch(`${settings.baseURL}auth/login`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Handle error response
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error in fetchLogin:', error.message);
    throw error;
  }
};
