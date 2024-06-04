import React from "react";
import HistogramV2 from "./HistogramV2";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height, width } = Dimensions.get("screen");

function CrowdForecast({ data }) {
  return (
    <View style={styles.crowdForcastContainer}>
      <Text style={styles.crowdForcastTitle}>Crowd Forcast</Text>
      <HistogramV2 dataPoints={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  crowdForcastContainer: {
    width: width,
  },
  crowdForcastTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default CrowdForecast;
