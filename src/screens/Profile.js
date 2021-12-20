import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { colors, parameters } from './../global/styles';
import auth from '@react-native-firebase/auth';


import Profile_header from '../component/Headers/Profile_Header';
import Login from './Login';
import { useNavigation } from '@react-navigation/core';


export default function Profile() {

    const navigation = useNavigation();
    const [currentUser, setCurrentUser] = useState(null);
   


    const handleLogout = async () => {
        try {
            await auth().signOut();
            navigation.navigate('Profile');
        } catch (e) {
            console.log(e);
        }
    }

    const fetchUser = () => {
        const cUser = auth().currentUser;
        setCurrentUser(cUser);
    }

    useEffect(() => {
        fetchUser();
    }, [auth().currentUser]);

    console.log('current user ==> ', currentUser);

    return (
        <React.Fragment>
            {!currentUser ? <Login /> :
                <View style={{ backgroundColor: colors.cardbackground }} >
                    <Profile_header />

                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}>
                        <Image
                            style={{ width: 80, height: 80, backgroundColor: colors.green, alignSelf: 'center', margin: 15, borderRadius: 70 }}
                            source={require('./../assets/images/Profile-Icon.png')}
                        />
                        <Text style={{ alignSelf: 'center', marginBottom: 5, color: colors.text, fontSize: 17 }}>Shyam Dornala</Text>
                    </View>


                    <TouchableOpacity style={styles.container}>
                        <Icon
                            type="material-community"
                            name="map-marker"
                            color={colors.text}
                            size={22}
                            style={{ margin: 15 }}
                        />
                        <Text style={styles.text1}>Addresses</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}>
                        <Icon
                            type="material-community"
                            name="tag"
                            color={colors.text}
                            size={22}
                            style={{ margin: 15 }}
                        />
                        <Text style={styles.text1}>Offers</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}>
                        <Icon
                            type="material-community"
                            name="bell-outline"
                            color={colors.text}
                            size={22}
                            style={{ margin: 15 }}
                        />
                        <Text style={styles.text1}>Notification</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}>
                        <Icon
                            type="material-community"
                            name="notebook"
                            color={colors.text}
                            size={22}
                            style={{ margin: 15 }}
                        />
                        <Text style={styles.text1}>Terms & Conditions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}>
                        <Icon
                            type="material-community"
                            name="phone-in-talk"
                            color={colors.text}
                            size={22}
                            style={{ margin: 15 }}
                        />
                        <Text style={styles.text1}>Contact Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}>
                        <Icon
                            type="material-community"
                            name="help-circle-outline"
                            color={colors.text}
                            size={22}
                            style={{ margin: 15 }}
                        />
                        <Text style={styles.text1}>FAQs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleLogout()}
                        style={styles.container} >
                        <Icon
                            type="material-community"
                            name="logout"
                            color={colors.text}
                            size={22}
                            style={{ margin: 15 }}
                        />
                        <Text style={{ marginVertical: 20, marginLeft: 0, color: 'black', fontWeight: 'bold', fontSize: 14, }}>Logout</Text>
                    </TouchableOpacity>

                </View>}
        </React.Fragment>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },

    text1: {
        margin: 15,
        marginLeft: 0,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
    }
});
