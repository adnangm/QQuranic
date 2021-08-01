import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import TutorsScreen from './TutorsScreen';
import MessagesScreen from './MessagesScreen';
import ClassroomScreen from './ClassroomScreen';
import ProfileScreen from './ProfileScreen';
import { DrawerContent } from './DrawerContent';
import SettingsScreen from './SettingsScreen';

const TutorsStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ClassroomStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="ClassroomStackScreen"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Tutors"
        component={TutorsStackScreen}
        options={{
          tabBarLabel: 'Tutors',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="search-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesStackScreen"
        component={MessagesStackScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubbles" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ClassroomStackScreen"
        component={ClassroomStackScreen}
        options={{
          tabBarLabel: 'Classroom',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="desktop" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          }
        })}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26}></Icon>
          ),
        
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const TutorsStackScreen = ({navigation}) => (
<TutorsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <TutorsStack.Screen name="Tutors" component={TutorsScreen} options={{
        title:'Tutors',
        headerLeft: () => (
            <Icon.Button name="filter" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name="search" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</TutorsStack.Navigator>
);

const MessagesStackScreen = ({navigation}) => (
<MessagesStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <MessagesStack.Screen name="Messages" component={MessagesScreen} options={{
          title: 'Messages',
        headerLeft: () => (
            <Icon.Button name="mail-unread-outline" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name="search" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
        }} />
</MessagesStack.Navigator>
);

const ClassroomStackScreen = ({navigation}) => (
  <ClassroomStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
  }}>
    <ClassroomStack.Screen name="Classroom" component={ClassroomScreen} options={{
      title: 'Classroom',
      headerRight: () => (
          <Icon.Button name="share-social-outline" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
      )
    }} />
  </ClassroomStack.Navigator>
);
  