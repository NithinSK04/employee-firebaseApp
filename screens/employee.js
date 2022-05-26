import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserDetails from './userDetails';
import EditScreen from './editScreen';
import DetailsScreen from './detailsScreen';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Employee = ({route, navigation}) => {
  const userData = route.params?.user;

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {},
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#003290',
        })}>
        <Tab.Screen name="User Data" component={UserDetails} />
        <Tab.Screen name="Edit" component={EditScreen} />
      </Tab.Navigator>
    </>
  );
};

export default Employee;
