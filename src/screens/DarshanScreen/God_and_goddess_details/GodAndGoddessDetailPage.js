import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const GodAndGoddessDetailPage = ({ route }) => {
  const { image, name } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.description}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  description: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default GodAndGoddessDetailPage;
