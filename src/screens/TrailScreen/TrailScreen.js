import React from "react";
import MapView, { Marker, Polyline, PROVIDER_DEFAULT } from "react-native-maps";
import { StyleSheet, View } from "react-native";
//information in https://blog.logrocket.com/react-native-maps-introduction/
const start = {
  latitude: 26.7954939,
  longitude: 78.8718,
  latitudeDelta: 15,
  longitudeDelta: 15,
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
      <MapView
        style={styles.map}
        initialRegion={start}
        provider={PROVIDER_DEFAULT}
        tileOverlay={{
          urlTemplate: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          maximumZ: 19,
          subdomains: ["a", "b", "c"],
        }}
      >
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
          coordinate={start}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbJotQrl0iqxt0sVeGg3N7nACcusGmPhJV4CBSowF_g&s"
          }
        />
        <Marker
          coordinate={{
            latitude: 26.7954939,
            longitude: 82.1683264,
          }}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbJotQrl0iqxt0sVeGg3N7nACcusGmPhJV4CBSowF_g&s"
          }
        />
        <Marker
          coordinate={{
            latitude: 26.333035,
            longitude: 82.125303,
          }}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbJotQrl0iqxt0sVeGg3N7nACcusGmPhJV4CBSowF_g&s"
          }
        />
        <Marker
          coordinate={{
            latitude: 21.051489,
            longitude: 81.724145,
          }}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbJotQrl0iqxt0sVeGg3N7nACcusGmPhJV4CBSowF_g&s"
          }
        />
        <Marker
          coordinate={end}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbJotQrl0iqxt0sVeGg3N7nACcusGmPhJV4CBSowF_g&s"
          }
        />
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
