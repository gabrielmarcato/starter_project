/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BACKGROUND_COLOR = '#fff';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    justifyContent: 'center',
  },
});
