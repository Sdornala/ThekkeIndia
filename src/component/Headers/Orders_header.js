/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { colors, parameters } from '../../global/styles';
import { Icon, withBadge } from 'react-native-elements'


export default function Orders_header() {

    const BadgeIcon = withBadge(0)(Icon)

    return (
        <View style={styles.header}>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/logo2.png')}
                />
            </View>
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 18, color: '#fff', }}>Your Orders</Text>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent:'flex-end', marginLeft: 70, marginRight: 15 }}>
               
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={28}
                    color={colors.cardbackground}
                />
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
    }
});
