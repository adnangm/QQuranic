
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import TutorsScreen from './TutorsScreen';
import MessagesScreen from './MessagesScreen';
import ClassroomScreen from './ClassroomScreen';
import MyTutors from './classroom/MyTutors';
import Invited from './classroom/Invited';
import Recommended from './classroom/Recommended';
import { NavigationContainer } from '@react-navigation/native';


const TopTab = createMaterialTopTabNavigator();

export default function ClassroomTabScreen ({navigation}) {
  
  return (
    <TopTab.Navigator
      initialRouteName="MyTutor"
      tabBarPosition= 'top'
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor:'black',
        labelStyle: { fontSize: 10 },
        style: { backgroundColor: '#499988', borderTopWidth: 1, borderTopColor: 'darkgreen' },
        indicatorStyle:{backgroundColor: "red"}
      }}
    >
      <TopTab.Screen
        name="MyTutors"
        component={MyTutors}
        options={{
          tabBarLabel: 'My Tutors',
          //tabBarColor: '#009387',
        }}
      />
      <TopTab.Screen
        name="Invited"
        component={Invited}
        options={{
          tabBarLabel: 'Invited',
          //tabBarColor: '#009387',
        }}
      />
      <TopTab.Screen
        name="Recommended"
        component={Recommended}
        options={{
          tabBarLabel: 'Recommended',
          //tabBarColor: '#009387',
        }}
      />
      
    </TopTab.Navigator>
);
  }


