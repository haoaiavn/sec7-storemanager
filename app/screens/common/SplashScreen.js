import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>CodeComplete</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 38,
    color: '#fb5b5a',
    marginBottom: 40,
  },
});

export default SplashScreen;
