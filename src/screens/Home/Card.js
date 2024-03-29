import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const Card = ({ title, imageUrl, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
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
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Align content at the bottom
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background overlay
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: "#fff", // Text color
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Card;
