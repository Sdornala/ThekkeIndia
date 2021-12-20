import React from 'react';
import { View, text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/Rootnavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
