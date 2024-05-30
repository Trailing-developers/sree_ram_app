import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { DarshanListItem } from "./DarshanListItem";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const cardView = (charge, index) => {
  return (
    <View key={index} style={styles.textBackground}>
      <Text style={styles.text}>{charge.type}</Text>
      <Text style={styles.price}>₹ {charge.price}</Text>
    </View>
  );
};

export default DarshanInfoPage = ({ data }) => {
  const HEIGHT = data ? data.length * 150 : 150; // Assuming each card has a height of 50

  return (
    // <FlatList
    //   data={charges}
    //   renderItem={(item, index) => <DarshanListItem item={item} />}
    //   scrollEnabled={false}
    // />
    <ScrollView contentContainerStyle={{ margin: 5, marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Darshan Prices Onsite
      </Text>
      <ImageBackground
        source={{
          uri: "https://londonmandir.baps.org/images/2011/10/darshan02_main.jpg",
        }}
        style={{ width: "100%", height: HEIGHT, elevation: 10 }}
        blurRadius={1}
      >
        <FlatList
          data={data}
          numColumns={2}
          renderItem={(item, index) => <DarshanListItem item={item} />}
          scrollEnabled={false}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.5)", // White background with 50% opacity
    // backgroundColor: "lightblue", // White background with 50% opacity
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
