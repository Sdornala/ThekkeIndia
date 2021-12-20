import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { colors } from '../global/styles';

export default function Signup({navigation}) {

    const [number, setNumber] = useState('')

    const register = async () => {
        try {
            await auth().signInWithPhoneNumber('+91' + number)
            
            .then (() => {
                firestore().collection('users').doc(auth().currentUser.uid)
                .set({
                    fname:'',
                    lname:'',
                    phonenumber:"signInWithPhoneNumber",
                })
            })
        } catch (error) {
            console.log('Signup Error!', error);
            // throw error;
        }

    }
    return (
        <View style={{ margin: 20 }}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>SignUp</Text>
            </View>

            <TextInput
                style={styles.input3}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input3}
                placeholder="Last Name"
            />
            <TextInput
                style={styles.input3}
                placeholder="Enter Referal Code (Optional)"
            />

            <View style={{ flexDirection: 'row'}}>
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
            <TouchableOpacity>
                <View 

                style={styles.Button}>
                    <Text style={styles.text}>Send Otp</Text>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection:'row', alignSelf:'center', marginTop:20}}>
                <View>
                    <Text>Already have a account?</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                    <Text style={{color:colors.green}}>Sign in</Text>
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
        width: 318,
        marginTop: 20,
        marginLeft: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },

    input3: {
        height: 45,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },

    Button: {
        backgroundColor: colors.green,
        height: 40,
        marginTop: 150,
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