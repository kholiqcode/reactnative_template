import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import appRoutes from './appRoutes';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator initialRouteName="Home">
    {appRoutes.map((route) => (
      <Stack.Screen {...route} />
    ))}
  </Stack.Navigator>
);

export default Router;
