import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const HistoryPage = ({ data }) => {
  return (
    <View style={styles.historyContainer}>
      <ImageBackground
        source={{
          uri: "https://t4.ftcdn.net/jpg/05/71/56/51/360_F_571565144_1BivKAfVmv64ieXYkeKMWmg5GCUpx3Rr.jpg",
        }}
        style={styles.ImageContainer}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>About the temple</Text>
          <Text style={styles.description}>{data.desc}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "white",
  },
  historyContainer: {
    marginVertical: 5,
    width: "100%",
    height: 200,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Overlay color
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Adjust the borderRadius value to match the parent container
  },
  ImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Adjust the borderRadius value as needed
    overflow: "hidden", // Ensure content is clipped to border radius
  },

  description: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
});

export default HistoryPage;
