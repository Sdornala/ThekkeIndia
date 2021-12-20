/* eslint-disable prettier/prettier */
import React from 'react';
import { View, text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon, withBadge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, parameters } from '../../global/styles';

export default function Header() {

  const BadgeIcon = withBadge(0)(Icon)

  return (
    <View style={styles.header}>

      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginLeft: 70, marginRight: 15 }}>
        <TouchableOpacity>
          <Icon
            type="material-community"
            name="magnify"
            color={colors.cardbackground}
            size={28}

          />
        </TouchableOpacity>

        <Icon
          type="material-community"
          name="bell"
          color={colors.cardbackground}
          size={28}

        />
        <TouchableOpacity>
          <BadgeIcon
            type="material-community"
            name="cart"
            size={28}
            color={colors.cardbackground}
          />
        </TouchableOpacity>

      </View>
    </View>

  )

}





const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.green,
    height: parameters.headerHeight,
  },

  logo: {
    width: 200,
    resizeMode: 'contain',
    marginLeft: 15,
  }
});
