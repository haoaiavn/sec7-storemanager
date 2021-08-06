import { StyleSheet, Text, View } from 'react-native';
import GlobalButton from '../components/global/Button.js';
import React from 'react';

const AccountScreen = ({ setUserToken }) => {
  return (
    <View style={styles.container}>
      <GlobalButton
        style={styles.logOutButton}
        title="Log Out"
        onPress={() => {
          setUserToken(null);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutButton: {
    width: 160,
    backgroundColor: '#000',
  },
});

export default AccountScreen;
