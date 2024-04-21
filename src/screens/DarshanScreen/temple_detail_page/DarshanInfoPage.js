import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";

const cardView = (charge, index) => {
  return (
    <View key={index} style={styles.textBackground}>
      <Text style={styles.text}>{charge.type}</Text>
      <Text style={styles.price}>₹ {charge.price}</Text>
    </View>
  );
};

const DarshanInfoPage = ({ data }) => {
  const { charges } = data;

  const HEIGHT = charges.darshan.length * 50; // Assuming each card has a height of 50

  return (
    <View style={{ margin: 5, marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Darshan Prices Onsite
      </Text>
      <ImageBackground
        source={{
          uri: "https://londonmandir.baps.org/images/2011/10/darshan02_main.jpg",
        }}
        style={{ width: "100%", height: HEIGHT }}
        blurRadius={1}
      >
        <View style={styles.textContainer}>
          {charges.darshan.map((charge, index) => cardView(charge, index))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default DarshanInfoPage;

const styles = StyleSheet.create({
  textBackground: {
    // backgroundColor: "rgba(255, 255, 255, 0.5)", // White background with 50% opacity
    backgroundColor: "lightblue", // White background with 50% opacity
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    maxWidth: "30%",
    margin: 20,
  },
  text: {
    color: "black", // Text color
    fontSize: 20,
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  price: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
});
