import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const ClassroomScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

    return (
      <View style={styles.container}>
        <ScrollView>
        <Text>Classroom Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
        </ScrollView>
      </View>
    );
};

export default ClassroomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
