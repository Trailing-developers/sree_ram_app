import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function TrailScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.7679,
          longitude: 78.8718,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
