import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MessagesScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text>No conversation found</Text>
        
        </ScrollView>
      </View>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
