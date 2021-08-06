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

const RegisterScreen = ({ setUserToken }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.registerView}>
          <Text style={styles.logoTitle}>Create Acount</Text>
          <View style={styles.registerForm}>
            <GlobalInput
              maxLength={64}
              keyboardType="email-address"
              placeholder="Email"
              getText={setEmail}
            />
            <GlobalInput
              maxLength={64}
              placeholder="Password"
              getText={setPassword}
            />
            <GlobalInput
              maxLength={64}
              secureTextEntry
              placeholder="Password Confirm"
              getText={setPasswordConfirm}
            />
            <GlobalButton
              style={styles.registerButton}
              title="Register"
              onPress={() => {
                setUserToken({ email, password, passwordConfirm });
              }}
            />
          </View>
          <View style={styles.loginRequest}>
            <Text>Have an acount? Please</Text>
            <GlobalButton
              style={styles.loginButton}
              styleTitle={styles.loginTitleButton}
              title="Login"
              onPress={() => {
                navigation.goBack();
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
  registerView: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  registerForm: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    width: 200,
    backgroundColor: '#24a0ed',
  },
  loginRequest: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    paddingHorizontal: 10,
    marginHorizontal: 0,
  },
  loginTitleButton: {
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

export default RegisterScreen;
