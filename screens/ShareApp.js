// import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useState } from 'react';
// import { View, Modal, StyleSheet, Text, Alert } from 'react-native';
// import { Pressable } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Share from 'react-native-share';



import React from 'react';
import { Share, View, Button, Alert } from 'react-native';


const ShareApp = () => {
  return (
    Alert.alert(
      "Invite Friends",
      "Invite Friends and earn Classroom Reward",
      [
        
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        { text: "Invite", onPress: () => {this.myCustomShare()}},
      ],
      { cancelable: false }
    )


    );
  }


// const ShareApp = () => {
  
//     try {
//       const result = Share.share({
//         message:
//           'React Native | A framework for building native apps using React',
//       });
//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
  

// };

export default ShareApp;




// const ShareApp = async() => {
//     const shareOptions = {
//       message: 'this is share test message',
//     }
//     try {
//       const shareResponse = await Share.open(shareOptions);
//      // console.log(JSON.stringify(shareResponse));
//     } catch (error) {
//       console.log('Error =>', error);
//     }

//     const myCustomShare = async() => {
//       const shareOptions = {
//         message: 'this is share test message',
//       }
//       try {
//         const ShareResponse = await Share.open(shareOptions);
//        // console.log(JSON.stringify(shareResponse));
//       } catch (error) {
//         console.log('Error =>', error);
//       }
//     };

//     const shareAlert = () =>
//   Alert.alert(
//     "Invite Friends",
//     "Invite Friends and earn Classroom Reward",
//     [
      
//       {
//         text: "Cancel",
//         onPress: () => console.log("Cancel Pressed"),
//         style: "cancel"
//       },
//       {
//         text: "Ask me later",
//         onPress: () => console.log("Ask me later pressed")
//       },
//       { text: "Invite", onPress: () => {this.myCustomShare()}},
//     ],
//     { cancelable: false }
//   );
  

//   return(
//     <ShareApp />
//   );
//   }
//   export default ShareApp;