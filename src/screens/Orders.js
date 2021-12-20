import React from 'react';

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Orders_header from '../component/Headers/Orders_header';
import { colors } from '../global/styles';



export default function Orders(){
    return (
        <View>
            <Orders_header />
            <View style={styles.card}>
                <View style={{flexDirection:'row', }}>
                    <Text style={{marginLeft:40, color:colors.cardbackground}}>Current</Text>
                    <Text style={{marginLeft:40, color:colors.cardbackground}}>Completed</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

card:{
    height:40,
    backgroundColor:colors.green,
    borderBottomEndRadius:60,
    borderBottomStartRadius:60
}

})