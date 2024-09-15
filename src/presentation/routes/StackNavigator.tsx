import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SettingScreen} from '../screens/settings/SettingScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import React from 'react';
import {ProductScreen} from '../screens/products/ProductScreen';

export type RootStackParamList = {
  Home: undefined;
  Product: {id: number; name: string};
  Settings: undefined;
  Products: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
