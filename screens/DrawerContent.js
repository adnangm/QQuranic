import React from 'react';
import { View, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Share from 'react-native-share';
import { useState } from 'react';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import{ AuthContext } from '../components/context';
import PlansAndPricingScreen from './planAndPricing/PlansAndPricingScreen';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    const myCustomShare = async() => {
        const shareOptions = {
          message: 'this is share test message',
        }
        try {
          const ShareResponse = await Share.open(shareOptions);
         // console.log(JSON.stringify(shareResponse));
        } catch (error) {
          console.log('Error =>', error);
        }
      };

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={{flex:1}}>

            <View>
              <Modal style={styles.centeredView}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Invite Friends</Text>
                    <Text>Invite Friends and earn Classroom Reward.</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button2, styles.buttonClose2]}
                      onPress={myCustomShare}
                    >
                      <Text style={styles.textStyle}>Invite</Text>
                    </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>


            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/profile.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Adnan GM</Title>
                                <Caption style={styles.caption}>@tutor</Caption>
                            </View>
                        </View>

                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="pricetag-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Plans and Pricing"
                            onPress={() => {props.navigation.navigate('PlansAndPricingScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="person-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Personal Info"
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="location-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Locations"
                            onPress={() => {props.navigation.navigate('LocationScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="lock-closed-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Change Password"
                            onPress={() => {props.navigation.navigate('LocationScreen')}}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        /> */}
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="timer-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Time Logs"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="share-social-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Invite Friends"
                            onPress={() => setModalVisible(true)}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Quran For Revision"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="archive-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Archives"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="eye-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Parental Watch"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>

                    
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-outline" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    centeredView: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: '50%'
      },
      modalView: {
        //marginTop: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 75,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 5,
        padding: 5,
        elevation: 12,
        
      },
      button2: {
        borderRadius: 5,
        padding: 5,
        elevation: 12,
        marginLeft: 20,
        //alignItems: 'flex-end'
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      buttonClose2: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

  });
