import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import { ScrollView } from "react-native";
import FastImage from "react-native-fast-image";

const GodAndGoddessDetailPage = ({ route }) => {
  const { image, name } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <FastImage source={{ uri: image }} style={styles.image} />
        <Text style={styles.description}>{name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 200,
    resizeModE: "cover",
  },
  description: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default GodAndGoddessDetailPage;
