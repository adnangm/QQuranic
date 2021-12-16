import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';
import {View, Modal, StyleSheet, Text, Alert} from 'react-native';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import TutorsScreen from './TutorsScreen';
import MessagesScreen from './MessagesScreen';
import ClassroomScreen from './ClassroomScreen';
import ProfileScreen from './ProfileScreen';
import {DrawerContent} from './DrawerContent';
import SettingsScreen from './SettingsScreen';
import ClassroomTabScreen from './ClassroomTabScreen';
import ShareApp from './ShareApp';
import {Searchbar} from 'react-native-paper';
import MyComponent from './SearchMessage';

const TutorsStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ClassroomStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator initialRouteName="ClassroomStackScreen" activeColor="#fff">
        <Tab.Screen
          name="Tutors"
          component={TutorsStackScreen}
          options={{
            tabBarLabel: 'Tutors',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="search-circle" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="MessagesStackScreen"
          component={MessagesStackScreen}
          options={{
            tabBarLabel: 'Messages',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="chatbubbles" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ClassroomStackScreen"
          component={ClassroomStackScreen}
          options={{
            tabBarLabel: 'Classroom',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="desktop" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.openDrawer();
            },
          })}
          options={{
            tabBarLabel: 'Settings',
            tabBarColor: '#009387',
            tabBarIcon: ({color}) => (
              <Icon name="settings" color={color} size={26}></Icon>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default MainTabScreen;

const TutorsStackScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{flex: 1}}>
      <TutorsStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <TutorsStack.Screen
          name="Tutors"
          component={TutorsScreen}
          options={{
            title: 'Tutors',
            headerLeft: () => (
              <Icon.Button
                name="filter"
                size={25}
                backgroundColor="#009387"
                onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerRight: () => (
              <Searchbar
                lightTheme
                autoCapitalize="none"
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            ),
          }}
        />
      </TutorsStack.Navigator>
    </View>
  );
};

const MessagesStackScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{flex: 1}}>
      <MessagesStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <MessagesStack.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            title: 'Messages',
            headerLeft: () => (
              <Icon.Button
                name="mail-unread-outline"
                size={25}
                backgroundColor="#009387"
                onPress={() => navigation.openDrawer()}></Icon.Button>
            ),
            headerRight: () => (
              <Searchbar
                lightTheme
                autoCapitalize="none"
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />

              //       <Icon.Button name="search" size={25} backgroundColor="#009387" onPress={<Searchbar
              //   placeholder="Search"
              //   onChangeText={onChangeSearch}
              //   value={searchQuery}
              // />}></Icon.Button>
            ),
          }}
        />
      </MessagesStack.Navigator>
    </View>
  );
};

const ClassroomStackScreen = ({navigation}) => {
  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Share the QQuranic App Link',
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
      // console.log(JSON.stringify(shareResponse));
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Invite Friends</Text>
              <Text>Invite Friends and earn Classroom Reward.</Text>
              <View style={{flexDirection: 'row'}}>
                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Button>
                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={myCustomShare}>
                  <Text style={styles.textStyle}>Invite</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <ClassroomStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <ClassroomStack.Screen
          name="Classroom"
          component={ClassroomTabScreen}
          options={{
            title: 'Classroom',
            headerRight: () => (
              <Icon.Button
                name="share-social-outline"
                size={25}
                backgroundColor="#009387"
                onPress={() => setModalVisible(true)}
              />
            ),
          }}
        />
      </ClassroomStack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  modalView: {
    //marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 75,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 1,
    elevation: 12,
    backgroundColor: '#009387',
    marginLeft: '5%',
    marginTop: '14%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});
