import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const RightContent = props => <Avatar.Icon {...props} icon="folder" />


const TutorsScreen = ({navigation}, props) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{alignContent: 'center', justifyContent: 'center', width: '95%', paddingLeft: '5%'}}>

          <Card style={styles.card}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} Right={RightContent} /> */}
            <Card.Title style={{backgroundColor: 'white'}}
              title="Adnan"
              subtitle="Pakistan"
              
              //left={(props) => <Avatar.Image {...props} source={{ uri: 'https://picsum.photos/700' }} />}
              left={(props) => <Avatar.Image {...props} source={require("../assets/profile.png")} />}
              right={(props) => <IconButton {...props} icon="message-bulleted" onPress={() => {}} />}
            />
            <Card.Content style={{backgroundColor: 'lightgray', }}>
              <Text>Gender: </Text>
              <Text>Languages: </Text>
              <Text>Teachers: </Text>
              <Text>Rate: </Text>
            </Card.Content>
            <Card.Actions style={{backgroundColor: 'white'}}>
              <Text>Online</Text>
              <Button style={{}}>More Info</Button>
            </Card.Actions>
          </Card>

          <Card style={styles.card}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} Right={RightContent} /> */}
            <Card.Title style={{backgroundColor: 'white'}}
              title="Adnan"
              subtitle="Pakistan"
              
              //left={(props) => <Avatar.Image {...props} source={{ uri: 'https://picsum.photos/700' }} />}
              left={(props) => <Avatar.Image {...props} source={require("../assets/profile.png")} />}
              right={(props) => <IconButton {...props} icon="message-bulleted" onPress={() => {}} />}
            />
            <Card.Content style={{backgroundColor: 'lightgray', }}>
              <Text>Gender: </Text>
              <Text>Languages: </Text>
              <Text>Teachers: </Text>
              <Text>Rate: </Text>
            </Card.Content>
            <Card.Actions style={{backgroundColor: 'white'}}>
              <Text>Online</Text>
              <Button style={{}}>More Info</Button>
            </Card.Actions>
          </Card>

          <Card style={styles.card}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} Right={RightContent} /> */}
            <Card.Title style={{backgroundColor: 'white'}}
              title="Adnan"
              subtitle="Pakistan"
              
              //left={(props) => <Avatar.Image {...props} source={{ uri: 'https://picsum.photos/700' }} />}
              left={(props) => <Avatar.Image {...props} source={require("../assets/profile.png")} />}
              right={(props) => <IconButton {...props} icon="message-bulleted" onPress={() => {}} />}
            />
            <Card.Content style={{backgroundColor: 'lightgray', }}>
              <Text>Gender: </Text>
              <Text>Languages: </Text>
              <Text>Teachers: </Text>
              <Text>Rate: </Text>
            </Card.Content>
            <Card.Actions style={{backgroundColor: 'white'}}>
              <Text>Online</Text>
              <Button style={{}}>More Info</Button>
            </Card.Actions>
          </Card>

          <Card style={styles.card}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} Right={RightContent} /> */}
            <Card.Title style={{backgroundColor: 'white'}}
              title="Adnan"
              subtitle="Pakistan"
              
              //left={(props) => <Avatar.Image {...props} source={{ uri: 'https://picsum.photos/700' }} />}
              left={(props) => <Avatar.Image {...props} source={require("../assets/profile.png")} />}
              right={(props) => <IconButton {...props} icon="message-bulleted" onPress={() => {}} />}
            />
            <Card.Content style={{backgroundColor: 'lightgray', }}>
              <Text>Gender: </Text>
              <Text>Languages: </Text>
              <Text>Teachers: </Text>
              <Text>Rate: </Text>
            </Card.Content>
            <Card.Actions style={{backgroundColor: 'white'}}>
              <Text>Online</Text>
              <Button style={{}}>More Info</Button>
            </Card.Actions>
          </Card>

          <Card style={styles.card}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} Right={RightContent} /> */}
            <Card.Title style={{backgroundColor: 'white'}}
              title="Adnan"
              subtitle="Pakistan"
              
              //left={(props) => <Avatar.Image {...props} source={{ uri: 'https://picsum.photos/700' }} />}
              left={(props) => <Avatar.Image {...props} source={require("../assets/profile.png")} />}
              right={(props) => <IconButton {...props} icon="message-bulleted" onPress={() => {}} />}
            />
            <Card.Content style={{backgroundColor: 'lightgray', }}>
              <Text>Gender: </Text>
              <Text>Languages: </Text>
              <Text>Teachers: </Text>
              <Text>Rate: </Text>
            </Card.Content>
            <Card.Actions style={{backgroundColor: 'white'}}>
              <Text>Online</Text>
              <Button style={{}}>More Info</Button>
            </Card.Actions>
          </Card>

        </View>
      </ScrollView>
      </View>
    );
};

export default TutorsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    //alignItems: 'center', 
    justifyContent: 'center',
    alignContent: 'center'
  },
  card: {
    borderRadius: 6,
    elevation: 13,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 3,
    marginVertical: 10, 
    
  }
});
