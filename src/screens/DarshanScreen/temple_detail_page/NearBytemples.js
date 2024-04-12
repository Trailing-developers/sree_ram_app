import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const temples = [
  {
    name: "Rudranath",
    image:
      "https://static2.tripoto.com/media/filter/tst/img/335923/TripDocument/1621919337_img_20210522_144758.jpg",
  },
  {
    name: "Tungnath",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnB386FLKJTw-Mqu1b_SBhEH58mRwiIwBIgbzq39gHg&s",
  },
  // other temples
];

const NearByTemples = ({ data }) => {
  const { placeLocation, userLocation } = data;

  return (
    <View style={{ marginLeft: 10, marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Nearby Temples
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {temples.map((temple) => (
          <View key={temple.name} style={{ marginRight: 20 }}>
            <Image
              source={{ uri: temple.image }}
              style={{ width: 200, height: 150 }}
            />
            <Text>{temple.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NearByTemples;