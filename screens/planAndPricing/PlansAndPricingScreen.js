import React from 'react';
import { View, Text, StyleSheet, StatusBar, Switch, } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';

import FAQs from './FAQs';
import Purchase from './Purchase';
import WhyQQuranic from './WhyQQuranic';
import ContactUs from './ContactUs';

const Stack = createStackNavigator();


const PlansAndPricingScreen = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();
  
    return (
      <View style={{flex: 1}}>
        <Stack.Navigator>
        <Stack.Screen name="PlanAndPrice" component={PlansAndPricing} options={{
          title: "Plan and Pricing",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#009387'
          },
          headerLeft: () => (
            <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
        ),
        }} />
        
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="Purchase" component={Purchase} />
        <Stack.Screen name="Why QQuranic" component={WhyQQuranic} />
        <Stack.Screen name="Contact Us" component={ContactUs} />
      </Stack.Navigator>
      
      </View>
    );
    
};

export default PlansAndPricingScreen;


const PlansAndPricing = ({navigation}) => {
  
  const [selectedHours, setSelectedHours] = useState('');

  const [isWatch, setIsWatch] = useState(false);
  const toggleSwitch1 = () => setIsWatch(previousState => !previousState);

  const [isRecord, setIsRecord] = useState(false);
  const toggleSwitch2 = () => setIsRecord(previousState => !previousState);

    return (
      <View style={styles.container}>
        <StatusBar/>
        <ScrollView>
          <View style={styles.header}>
              <Text style={styles.heading}>Learn Quran Now!</Text>
              <Text>How Many Monthly hours do you need?</Text>
              <Picker
                selectedValue={selectedHours}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedHours(itemValue)
                }>
                <Picker.Item label="5" value="5" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="25" value="25" />
                <Picker.Item label="30" value="30" />
                <Picker.Item label="45" value="45" />
                <Picker.Item label="60" value="60" />
                <Picker.Item label="75" value="75" />
                <Picker.Item label="90" value="90" />
                <Picker.Item label="120" value="120" />
                <Picker.Item label="150" value="150" />
              </Picker>
              <Text>Do you want to enable parental watch?</Text>
              <Text style={styles.watchText}>Parental watch automacically recods snippits of lessons at random time.</Text>
              <Switch style={styles.switch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isWatch ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isWatch}
              />
              <Text style={styles.watchText}>Do you want ability to record parts of your lessons for Revision</Text>
              <Switch style={styles.switch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isRecord ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isRecord}
              />
              <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#009387'}}>US$ 8.99/month</Text>
              <Button style={styles.purchaseButton} mode="contained" labelStyle= {{fontSize: 20, fontWeight: 'bold'}} onPress={() => navigation.navigate('Purchase')}>
              <Text style={{color:"black"}}>Purchase</Text>
              </Button>
              <Text>Classroom plans renew automatically. you can Unsubscribe it at any time to turn of automatic renewal.</Text>
              <Text>The tutors payment is not included in the classroom plan. Tutors have to be paid separately.</Text>
              <View>
            </View>
          </View>
        </ScrollView>

        
              <View style={styles.footer}>
                <Button style={styles.faqButton} mode="contained" onPress={() => navigation.navigate('FAQs')}>
                <Text style={{color:"white"}}>FAQs</Text>
                </Button>
                <Button style={styles.whyButton} mode="contained" onPress={() => navigation.navigate('Why QQuranic')}>
                <Text style={{color:"white"}}>Why QQuranic</Text>
                </Button>
              </View>
              
            
          
      </View>
    );
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //alignItems: 'center', 
    //justifyContent: 'center'
    flexDirection: 'column',
  },
  header: {
    flex: 3.8,
    //height: '10%',
    backgroundColor: 'white',
    width: '98%',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  purchaseButton: {
    width: '60%',
    padding: 1,
    marginLeft: '20%',
    backgroundColor: '#e88c1c',

  },
  footer: {
    flex: 0.2,
    flexDirection: 'row',
    
  },
  faqButton: {
    width: '50%',
    padding: 4,
    backgroundColor: '#009387'
  },
  whyButton: {
    width: '50%',
    padding: 4,
    marginLeft: '0.5%',
    backgroundColor: '#009387'
  }
});
