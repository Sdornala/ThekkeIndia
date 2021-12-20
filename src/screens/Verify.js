import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Verify({ route }) {

    const navigation = useNavigation();
    const [code, setCode] = useState('');

    

    const verify = async () => {

        try {
            const response = await route.params.confirm.confirm(code);
            if (response) {
                navigation.navigate('Profile');
            }
        } catch (error) {
            console.log('Invalid code.', error);
            ToastAndroid.show('Invalid code.', ToastAndroid.SHORT)
        }
    }


    return (
        <View style={styles.container}>

            <View style={styles.head}>
                <Text style={styles.headtext}>Verify OTP</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Enter 6 digit OTP'
                    keyboardType="number-pad"
                    value={code}
                    onChangeText={(text) => setCode(text)}
                    maxLength={6}
                />
                <TouchableOpacity
                    onPress={() => verify()}
                    style={styles.listView}
                >
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    head: {
        marginTop: 180,
        alignSelf: 'center'
    },

    headtext: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 15
    },

    TextInput: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 60,
        color: 'black',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },

    listView: {
        width: '50%',
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'green',
        borderRadius: 40,
    },

    btntext: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})
