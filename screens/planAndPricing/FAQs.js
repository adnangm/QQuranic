import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


const FAQs = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  
  return (
      <View style={{flex: 1}}>
    <List.Section>
      <List.Accordion
        title="Can I use Skype or another free software with tutors?"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}
        >
        <List.Item title="No, you can only use QQuranic Classroom" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
    
    <View  style={{backgroundColor: 'lightgray', with: '80%'}}>
    <Collapse>
    <CollapseHeader>
      <View>
        <Text>Can I use Skype or another free software with tutors?</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
      <Text>No, you can only use QQuranic Classroom</Text>
    </CollapseBody>
</Collapse>
</View>

    
    
    </View>
    

  );
};

export default FAQs;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

