import React from 'react';
import { fetchLogin } from '../services/auth';
import {
  SafeAreaView,
  TextInput,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const [number, onChangeNumber] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleLogin = async () => {
    try {
      const response = await fetchLogin({phone_number: number, password:password});
      console.log("logggg response", response)

      const {token} = response;

      // Store the token using AsyncStorage
      await AsyncStorage.setItem('access_token', token);

      // Optionally, you can store other user information in AsyncStorage as well
      // await AsyncStorage.setItem('userPhoneNumber', phoneNumber);
      // await AsyncStorage.setItem('userPassword', password);

      // navigation.navigate('HomePage');
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.loginCard}>
        <Text style={styles.title}>Welcome Back!</Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
            onPress = {handleLogin}
          >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#8ADFD2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    minWidth: 340,
    maxWidth: 400,
    minHeight: 400,
    elevation: 3,
    gap: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F2F2F2',
    width: 300,

    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  loginButton: {
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
    paddingTop: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
