import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const TempleTitle = ({ title, address }) => {
  return (
    <Animatable.View
      style={styles.headers}
      animation={"fadeInUp"}
      easing={"ease-in-out"}
      delay={500}
      duration={400}
    >
      <Text selectable={true} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.address}>{address}</Text>
    </Animatable.View>

    // <View style={styles.card}>
    //   <Animatable.View
    //     style={styles.headers}
    //     animation={"fadeInUp"}
    //     easing={"ease-in-out"}
    //     delay={500}
    //     duration={400}
    //   >
    //     <Text style={styles.title}>{title}</Text>
    //     <Text style={styles.address}>{address}</Text>
    //   </Animatable.View>
    // </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    height: "30%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headers: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  address: {
    fontSize: 20,
    color: "#fff",
  },
});

export default TempleTitle;
