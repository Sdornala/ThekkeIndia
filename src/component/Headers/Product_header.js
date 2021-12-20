/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters } from '../../global/styles';
import { Icon, withBadge } from 'react-native-elements'
import Home from '../../screens/Home';
import { Categories, category_products } from '../../global/Data';
import { useNavigation } from '@react-navigation/core';

export default function Product_header() {

    const navigation = useNavigation();
    const BadgeIcon = withBadge(0)(Icon)

    


    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <Icon
                    type="material-community"
                    name="arrow-left"
                    color={colors.cardbackground}
                    size={28}
                    onPress={() => navigation.goBack()}
                />

            </View>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/logo2.png')}
                />
            </View>
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 18, color: '#fff', }}></Text>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: 'flex-end', marginLeft: 70, marginRight: 15 }}>

                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={28}
                    color={colors.cardbackground}
                />
            </View>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', }}>

                </View>
            </View>

        </View>

    )

}





const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.green,
        height: parameters.headerHeight,
        alignItems: 'center',
    },

    logo: {
        width: 50,
        resizeMode: 'contain',
        marginLeft: 15,
    },
    card: {
        height: 40,
        backgroundColor: colors.green,
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60
    }
});
