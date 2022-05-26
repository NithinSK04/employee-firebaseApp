import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './detailsScreen';
import Dashboard from './dashboard';

const stack = createStackNavigator();
const UserDetails = () => {
  return (
    <stack.Navigator screenOptions={{headerShown: false}}>
      <stack.Screen name="dashboard" component={Dashboard} />
      <stack.Screen name="details" component={DetailsScreen} />
    </stack.Navigator>
  );
};

export default UserDetails;
