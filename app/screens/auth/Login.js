import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';

import GlobalButton from '../../components/global/Button.js';
import GlobalInput from '../../components/global/Input.js';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setUserToken }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginView}>
          <Text style={styles.logoTitle}>Welcome</Text>
          <View style={styles.loginForm}>
            <GlobalInput
              maxLength={64}
              keyboardType="email-address"
              placeholder="Email"
              getText={setEmail}
            />
            <GlobalInput
              maxLength={64}
              secureTextEntry
              placeholder="Password"
              getText={setPassword}
            />
            <GlobalButton
              style={styles.loginButton}
              title="Login with Anonymus"
              onPress={() => {
                setUserToken({ email, password });
              }}
            />
          </View>
          <View style={styles.registerRequest}>
            <Text>Don't have an acount?</Text>
            <GlobalButton
              style={styles.registerButton}
              styleTitle={styles.registerTitleButton}
              title="Register"
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginForm: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: 200,
    backgroundColor: '#24a0ed',
  },
  registerRequest: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerButton: {
    paddingHorizontal: 10,
    marginHorizontal: 0,
  },
  registerTitleButton: {
    color: '#046fe4',
    textDecorationLine: 'underline',
  },
  logoTitle: {
    fontWeight: 'bold',
    fontSize: 38,
    color: '#fb5b5a',
    marginBottom: 40,
  },
});

export default LoginScreen;
