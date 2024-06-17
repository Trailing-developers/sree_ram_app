import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

const ScrollWidgets = () => {
  return (
    <ImageBackground
      source={{ uri: "https://example.com/background-image.jpg" }} // Replace with your background image URL
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Sunny Day Ahead Section */}
        <View style={styles.card}>
          <Text style={styles.title}>Sunny Day Ahead</Text>
          <Text style={styles.subtitle}>
            Expect Thursday to be next sunny day
          </Text>
          <View style={styles.indicatorContainer}>
            <View style={[styles.indicator, styles.activeIndicator]} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#ffffff",
  },
});

export default ScrollWidgets;
