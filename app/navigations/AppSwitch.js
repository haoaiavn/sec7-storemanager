import * as SecureStore from 'expo-secure-store';

import React, { useEffect, useState } from 'react';

import AppFlows from './AppFlows.js';
import AuthStack from './AuthStack.js';
import SplashScreen from '../screens/common/SplashScreen.js';
import { isLogined } from '../apiFaker';

const AppSwitch = () => {
  const [checkedUser, setCheckedUser] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const hanldeSwitch = async () => {
    try {
      const check = await isLogined();
      if (check) {
        const token = await SecureStore.getItemAsync('userToken');
        setUserToken(token);
        setCheckedUser(true);
      } else {
        setCheckedUser(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    hanldeSwitch();
  }, []);

  if (!checkedUser) {
    return <SplashScreen />;
  }
  return (
    userToken == null ? (
      <AuthStack setUserToken={setUserToken} />
    ) : (
      <AppFlows setUserToken={setUserToken} />
    )
  );
};

export default AppSwitch;
