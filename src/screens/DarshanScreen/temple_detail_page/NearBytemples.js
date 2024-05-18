import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Carousel from "../../../shared/Carousel";
import Card from "../../../shared/Card/Card";
import CardMedia from "../../../shared/Card/CardMedia";
import CardContent from "../../../shared/Card/CardContent";
import { sizes } from "../../../constants/theme";

const temples = [
  {
    name: "Rudranath",
    id: 1,
    image:
      "https://static2.tripoto.com/media/filter/tst/img/335923/TripDocument/1621919337_img_20210522_144758.jpg",
  },
  {
    name: "Tungnath",
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnB386FLKJTw-Mqu1b_SBhEH58mRwiIwBIgbzq39gHg&s",
  },
  // other temples
];

const NearByTemples = ({ data }) => {
  const { placeLocation, userLocation } = data;

  return (
    <View style={{ marginVertical: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 10,
        }}
      >
        {"Nearby Temples"}
      </Text>
      <Carousel
        items={temples}
        renderItems={({ item, style }) => {
          return (
            <Card key={item.title + "_" + item.id} style={[styles.card, style]}>
              <CardMedia source={item.image} />
              <CardContent style={styles.container}>
                <View style={styles.textBox}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.distanceBox}>
                  <Text style={styles.title}>5 KM</Text>
                </View>
              </CardContent>
            </Card>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    elevation: 10,
  },
  container: {
    height: 50,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: sizes.body,
    fontWeight: "bold",
  },
});

export default NearByTemples;
