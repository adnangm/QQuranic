import React from 'react';
import { View, StyleSheet, StatusBar, Image,  } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  TextInput,
  RadioButton,
  Provider,
  Appbar,
  Button,

} from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton
} from "react-native-selectmultiple-button";

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import ImagePicker from 'react-native-image-picker';

const Stack = createStackNavigator();


const ProfileScreen = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <Stack.Navigator>
        <Stack.Screen name="PlanAndPrice" component={Profile} options={{
          title: "Profile",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#009387'
          },
          headerLeft: () => (
            <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
        ),
        }} />
      </Stack.Navigator>
      </View>
    );
};

export default ProfileScreen;



const Profile = () => {

  const { colors } = useTheme();
  const theme = useTheme();
  
  const [text, setText] = React.useState('');

  const [country, setCountry] = useState('');

  const [date, setDate] = useState(new Date())

  const [value, setValue] = React.useState('first');


  return(
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        
          <View>

            <View style={{alignContent: 'center', justifyContent: 'center'}}>
              <Avatar.Image style={{alignSelf: 'center', marginBottom: '10%', marginTop: '4%'}} source={require('../assets/profile.png')} />
            </View>

            <View style={styles.paymentForm}>
              <TextInput style={{width: '100%'}}
                  label="Name"
                  mode= "flat"
                  value={text}
                  onChangeText={text => setText(text)}
              />
              <TextInput 
                label="Email"
                mode="flat"
                value={text}
                onChangeText={text => setText(text)}
              />

              <Text style={{padding: '2%'}}>Date of Birth</Text>
              <DatePicker
                mode="date"
                date={date}
                onDateChange={setDate}
              />

              <Text style={{padding: '2%'}}>Language</Text>
              <Picker
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) =>
                  setCountry(itemValue)
                }>
                <Picker.Item label="Select Language" value="Select Language" />
                <Picker.Item label="Arabic" value="Arabic" />  
                <Picker.Item label="Urdu" value="Urdu" />
                <Picker.Item label="English" value="English" />
              </Picker>

              <Text style={{padding: '2%'}}>i want to Learn:</Text>
              {/* <SelectMultipleGroupButton
                containerViewStyle={{
                  justifyContent: "flex-start"
                }}
                highLightStyle={{
                  borderColor: "gray",

                  backgroundColor: "transparent",

                  textColor: "gray",

                  borderTintColor: 'red',

                  backgroundTintColor: "transparent",

                  textTintColor: 'red'
                }}
                onSelectedValuesChange={selectedValues =>
                  this._groupButtonOnSelectedValuesChange(selectedValues)
                }
                group={multipleGroupData}
              />; */}

              <Text style={{fontSize: 14, color: '#009387'}}>If you uncheck the check-box below, Tutors will not be able to message you.</Text>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton value="first" />
                <Text style={{marginTop: '1%'}}>Receive messages from Tutors</Text>
              </View>
              </RadioButton.Group>
              <Button mode= "contained" style={styles.button}>
                <Text style={{color: 'white'}}>Save</Text>
              </Button>

            </View>

          </View>

      </ScrollView>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  paymentForm: {
    width: '95%',
    alignSelf: 'center'
  },
  button: {backgroundColor: '#009387', 
  width: '60%', 
  alignSelf: 'center', 
  borderRadius: 25, 
  marginTop: '5%', 
  marginBottom: '5%'}
});
