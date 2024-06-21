import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Subliminals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Subliminals Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});