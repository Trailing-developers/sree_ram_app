import React from "react";
import HistogramV2 from "./HistogramV2";
import { StyleSheet, Text, View } from "react-native";

function CrowdForecast({ data }) {
  return (
    <View>
      <View style={styles.crowdForcastContainer}>
        <Text style={styles.crowdForcastTitle}>Crowd Forcast</Text>
        <HistogramV2 dataPoints={data.timings} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  crowdForcastContainer: {
    paddingVertical: 20,
  },
  crowdForcastTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default CrowdForecast;
