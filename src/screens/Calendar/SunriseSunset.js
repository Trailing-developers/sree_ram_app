import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Svg, { Path, Circle, Line } from "react-native-svg";
import { timeToMinutes } from "../../helper/miscellaneous";
import { BlurView } from "@react-native-community/blur";

const SunriseSunset = ({
  sunriseLabel,
  sunsetLabel,
  sunrise,
  sunset,
  image,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
      >
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{sunriseLabel}</Text>
          <Text style={styles.timeText}>{sunsetLabel}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{sunrise}</Text>
          <Text style={styles.timeText}>{sunset}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#87CEEB",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: 26,
    color: "#ffffff",
    fontWeight: "600",
  },
  absolute: {
    position: "absolute",
    backgroundColor: "rgba(255,196,112,0.1)",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default SunriseSunset;
