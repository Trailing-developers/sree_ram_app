import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default WeatherScreenVideo = () => {
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Videos</Text>
        <View style={styles.videoRow}>
          <Image
            style={styles.videoThumb}
            source={{
              uri: "https://media.istockphoto.com/id/1368099869/photo/full-moon-setting-over-choppy-waters.jpg?s=612x612&w=0&k=20&c=wPdqF-tRU8ddqF0HgJAueXy4NuKhYdmRRRyc5cIYdmo=",
            }}
          />
          <Text style={styles.videoTitle}>kaise aaj ke din dukh durr kare</Text>
        </View>
        <View style={styles.videoRow}>
          <Image
            style={styles.videoThumb}
            source={{
              uri: "https://media.istockphoto.com/id/1368099869/photo/full-moon-setting-over-choppy-waters.jpg?s=612x612&w=0&k=20&c=wPdqF-tRU8ddqF0HgJAueXy4NuKhYdmRRRyc5cIYdmo=",
            }}
          />
          <Text style={styles.videoTitle}>Rath Yatra ki video live</Text>
        </View>
      </View>

      {/* Additional info section */}
      <View style={styles.section}>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Purchange Property</Text>
            <Text style={styles.infoValue}>Good</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Car</Text>
            <Text style={styles.infoValue}>Good</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Business</Text>
            <Text style={styles.infoValue}>Bad</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    padding: 20,
  },
  location: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "48%",
  },
  infoLabel: {
    fontSize: 16,
    color: "#666",
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  sunInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  sunText: {
    fontSize: 16,
    marginTop: 10,
  },
  moonInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  moonText: {
    fontSize: 16,
  },
  moonPhase: {
    fontSize: 16,
    marginTop: 5,
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  videoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  videoThumb: {
    width: 100,
    height: 70,
    marginRight: 10,
  },
  videoTitle: {
    fontSize: 16,
    flexShrink: 1,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  infoBox: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "30%",
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
