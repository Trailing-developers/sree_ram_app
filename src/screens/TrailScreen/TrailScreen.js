import React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View } from "react-native";

const start = {
  latitude: 26.7954939,
  longitude: 78.8718,
  latitudeDelta: 0,
  longitudeDelta: 0,
};

const end = {
  latitude: 7.81675,
  longitude: 82.1683264,
  latitudeDelta: 15,
  longitudeDelta: 15,
};
export default function TrailScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={start}>
        <Polyline
          coordinates={[
            start,
            {
              latitude: 26.333035,
              longitude: 82.125303,
            },
            {
              latitude: 26.333035,
              longitude: 82.125303,
            },
            end,
          ]} //specify our coordinates
          strokeColor={"#000"}
          strokeWidth={3}
          lineDashPattern={[1]}
        />
        <Marker
          coordinate={{
            latitude: 26.7954939,
            longitude: 82.1683264,
          }}
        />
        <Marker
          coordinate={{
            latitude: 26.333035,
            longitude: 82.125303,
          }}
        />
        <Marker
          coordinate={{
            latitude: 21.051489,
            longitude: 81.724145,
          }}
        />
        <Marker coordinate={end} />
      </MapView>
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
