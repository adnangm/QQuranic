import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';


const WhyQQuranic = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  
    return (
      <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <View style={{marginTop: '-70%', marginBottom: '-70%'}}>
          <Image style={{width: deviceWidth, resizeMode: 'contain', }} source={require('./whyus.jpeg')} />
        </View>

        <View>
          <Text style={styles.heading}>Quran Learning Made Easier</Text>
        </View>

        <View>
          <Text style={{textAlign: 'center', padding: '5%'}}>Video here</Text>
        </View>

        <View>
          <Text>Convenience: No travel time required</Text>
          <Text>Choice: Hundred of Highly Qualified Tutors</Text>
          <Text>Cost-effective: Tutor rates to suit all budgets</Text>
          <Text>Technology: Built-in tools to help you learn Quran</Text>
        </View>

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
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
    //width: '110%'
  }
});
