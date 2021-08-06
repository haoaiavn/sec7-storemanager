import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import AppSwitch from './app/navigations/AppSwitch.js';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppSwitch />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
