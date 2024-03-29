import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1, // Aspect ratio 1:1 for square cards
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#fff", // Card background color
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
