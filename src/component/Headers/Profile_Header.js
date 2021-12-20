/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters } from '../../global/styles';

export default function Profile_header() {


    return (
        <View style={styles.header}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/logo2.png')}
                />
            </View>
            <View style={{marginLeft:20}}>
                <Text style={{fontSize:18, color:'#fff',}}>Profile</Text>
            </View>

        </View>

    )

}





const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        backgroundColor: colors.green,
        height: parameters.headerHeight,
        alignItems:'center',
    },

    logo: {
        width:50,
        resizeMode: 'contain',
        marginLeft: 15,
    }
});
