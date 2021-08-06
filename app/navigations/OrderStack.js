import OrdersScreen from '../screens/Orders.js';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const HIDE_HEADER = {
  headerShown: false,
};
const ORDER_SCREEN_OPTION = {
  headerShown: true,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};
const Stack = createStackNavigator();
const OrderStack = () => {
  return (
    <Stack.Navigator initialRouteName="Orders" screenOptions={HIDE_HEADER}>
      <Stack.Screen
        name="Orders"
        options={ORDER_SCREEN_OPTION}
        component={OrdersScreen}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
