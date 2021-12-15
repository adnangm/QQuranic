import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const ContactUs = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();

  const [text, setText] = React.useState('');

  const [country, setCountry] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

        <View>
          <View style={{padding: '3%'}}>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              We appreciate youe interest in{' '}
              <Text style={{fontWeight: 'bold'}}>quran-tutor-app.</Text>
            </Text>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              If you have any question please see the{' '}
              <Text style={{fontWeight: 'bold'}}>FAQs</Text> page or fill out
              the form
            </Text>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              info@quran-tutor-app.com
            </Text>
          </View>

          <View style={styles.paymentForm}>
            <TextInput
              style={{width: '48.7%', width: '100%'}}
              label="Full Name"
              //mode= "outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Email"
              //mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <TextInput
              label="Phone Number"
              //mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
            <Text style={{padding: '1%', fontSize: 15}}>Country</Text>
            <Picker
              selectedValue={country}
              onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
              <Picker.Item label="Pakistan" value="Pakistan" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="Saudi Arab" value="Saudi Arab" />
              <Picker.Item label="Dubai" value="Dubai" />
              <Picker.Item label="Kuwait" value="Kuwait" />
              <Picker.Item label="Oman" value="Oman" />
              <Picker.Item label="Qatar" value="Qatar" />
              <Picker.Item label="Bahrain" value="Bahrain" />
              <Picker.Item label="US" value="US" />
              <Picker.Item label="UK" value="UK" />
              <Picker.Item label="Malaysia" value="Malaysia" />
              <Picker.Item label="Australia" value="Australia" />
            </Picker>
            <TextInput
              label="Details"
              //mode="outlined"
              value={text}
              onChangeText={text => setText(text)}
            />
          </View>

          <View style={{marginTop: '10%'}}>
            <Button mode="contained" style={styles.button}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Send</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentForm: {
    width: '98%',
  },
  button: {
    borderRadius: 25,
    width: '70%',
    alignSelf: 'center',
    padding: '1%',
  },
});
