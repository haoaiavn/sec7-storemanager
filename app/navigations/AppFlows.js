import * as React from 'react';

import AccountScreen from '../screens/Account.js';
import ChatScreen from '../screens/Chat.js';
import HomeSceen from '../screens/Home.js';
import { Ionicons } from '@expo/vector-icons';
import OrderDetailScreen from '../screens/OrderDetail.js';
import OrderStack from './OrderStack.js';
import ProductsScreen from '../screens/Products.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const tabBarOptions = {
  activeTintColor: '#24a0ed',
};
const HIDE_HEADER = {
  headerShown: false,
};
const SHOW_HEADER = {
  headerShown: true,
};
const screenTabOption = ({ name, icon }) => {
  return {
    tabBarLabel: name,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={icon} color={color} size={size} />
    ),
  };
};
const AppTab = ({ setUserToken }) => {
  return (
    <Tab.Navigator
      initialRouteName="Orders"
      tabBarOptions={tabBarOptions}
      screenOptions={HIDE_HEADER}
    >
      <Tab.Screen
        name="Home"
        component={HomeSceen}
        options={screenTabOption({ name: 'Home', icon: 'home' })}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={screenTabOption({ name: 'Products', icon: 'cube' })}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStack}
        options={screenTabOption({ name: 'Orders', icon: 'albums' })}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={screenTabOption({ name: 'Chat', icon: 'chatbubbles' })}
      />
      <Tab.Screen
        name="Account"
        options={screenTabOption({ name: 'Account', icon: 'person' })}
      >
        {() => <AccountScreen setUserToken={setUserToken} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const screenStackOption = ({ title }) => ({
  title: title,
});
const AppFlows = ({ setUserToken }) => {
  return (
    <Stack.Navigator initialRouteName="AppTab" screenOptions={HIDE_HEADER}>
      <Stack.Screen
        name="AppTab"
        options={screenStackOption({ title: 'Main' })}
      >
        {() => <AppTab setUserToken={setUserToken} />}
      </Stack.Screen>
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={SHOW_HEADER}
      />
    </Stack.Navigator>
  );
};

export default AppFlows;
