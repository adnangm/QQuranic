
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

// const MyTutorsStack = createStackNavigator();
// const InvitedStack = createStackNavigator();
// const RecommendedStack = createStackNavigator();

const TopTab = createMaterialTopTabNavigator();

export default function ClassroomTabScreen ({navigation}) {
  return (
    <TopTab.Navigator
      initialRouteName="MyTutors"
      tabBarPosition= 'top'
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#499988' },
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





// const MyTutorsStackScreen = ({navigation}) => (
// <MyTutorsStack.Navigator 
// // screenOptions={{
// //         headerStyle: {
// //         backgroundColor: '#009387',
// //         },
// //         headerTintColor: '#fff',
// //         headerTitleStyle: {
// //         fontWeight: 'bold'
// //         }
// //     }}
//     >
//         <MyTutorsStack.Screen name="MyTutors" component={MyTutors} 
//         // options={{
//         // title:'Tutors',
//         // headerLeft: () => (
//         //     <Icon.Button name="filter" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         // ),
//         // headerRight: () => (
//         //   <Icon.Button name="search" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//         // )
//         // }} 
//         />
// </MyTutorsStack.Navigator>
// );

// const InvitedStackScreen = ({navigation}) => (
// <InvitedStack.Navigator 
// // screenOptions={{
// //         headerStyle: {
// //         backgroundColor: '#009387',
// //         },
// //         headerTintColor: '#fff',
// //         headerTitleStyle: {
// //         fontWeight: 'bold'
// //         }
// //     }}
//     >
//         <InvitedStack.Screen name="Invited" component={Invited} 
//       //   options={{
//       //     title: 'Messages',
//       //   headerLeft: () => (
//       //       <Icon.Button name="mail-unread-outline" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//       //   ),
//       //   headerRight: () => (
//       //     <Icon.Button name="search" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//       // )
//       //   }} 
//         />
// </InvitedStack.Navigator>
// );

// const RecommendedStackScreen = ({navigation}) => (
//   <RecommendedStack.Navigator 
//   // screenOptions={{
//   //     headerStyle: {
//   //     backgroundColor: '#009387',
//   //     },
//   //     headerTintColor: '#fff',
//   //     headerTitleStyle: {
//   //     fontWeight: 'bold'
//   //     }
//   // }}
//   >
//     <RecommendedStack.Screen name="Recommended" component={Recommended} 
//     // options={{
//     //   title: 'Classroom',
//     //   headerRight: () => (
//     //       <Icon.Button name="share-social-outline" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
//     //   )
//     // }} 
//     />
//   </RecommendedStack.Navigator>
// );
  