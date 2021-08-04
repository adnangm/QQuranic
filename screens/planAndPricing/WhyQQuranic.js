import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const WhyQQuranic = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Plans and Pricing WhyQutor Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </ScrollView>
      </View>
    );
};

export default WhyQQuranic;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
