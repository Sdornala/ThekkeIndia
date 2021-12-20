import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../global/styles';
import { useNavigation } from '@react-navigation/core';
import auth from '@react-native-firebase/auth';

import { useHistory } from "react-router-dom";

export default function Login() {

    const navigation = useNavigation();

    const [number, setNumber] = useState('')
    const [confirm, setConfirm] = useState(null);

    

    const signin = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber('+91' + number);
            console.log("confirmation", confirmation)
            if (confirmation) {
                setConfirm(confirmation);
                navigation.navigate('Verify', { 'confirm': confirmation })
            }
        } catch (error) {
            console.log('Sign In Error!', error);
            // throw error;
        }

    }

    console.log('login page entered...');

    return (
        <View style={{ margin: 20 }}>
            {/* <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                <Text>to Profile</Text>
            </TouchableOpacity> */}
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Welcome Login</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text>
                    Enter Your Phone Number and we will send SMS with confirmation code to your number
                </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 250, }}>
                <Text
                    style={styles.input}
                >+91</Text>

                <TextInput
                    style={styles.input2}
                    onChangeText={(value) => setNumber(value)}
                    maxLength={10}
                    value={number}
                    placeholder="Enter Number"
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity onPress={signin}>
                <View style={styles.Button}>
                    <Text style={styles.text}>Sign In</Text>
                </View>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                <View>
                    <Text>Don't have a account?</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: colors.green }}>Sign up</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: 45,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },

    input2: {
        height: 45,
        width: 300,
        marginTop: 20,
        marginLeft: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },

    Button: {
        backgroundColor: colors.green,
        height: 40,
        alignSelf: 'center',
        width: 130,
        borderRadius: 20
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 6,
        color: colors.cardbackground
    }
})