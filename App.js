import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const {width: screenWidht, height: screenHeight} = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={{flex: 1, height: screenHeight}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
