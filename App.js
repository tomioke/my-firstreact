import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome, Tomi Irvan Oktavianto!!</Text>
      <Text>NIM : 1903040037</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e040fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
