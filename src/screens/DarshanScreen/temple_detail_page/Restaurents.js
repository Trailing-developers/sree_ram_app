import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const restaurants = [
  {
    name: "Restaurant 1",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Restaurant 2",
    image:
      "https://cdn.sanity.io/images/pmfmd3fy/production/1890f490a2c058a1610182b8153e5cd6cc5686aa-1996x3000.jpg",
  },
  // other restaurants
];

const Restaurants = ({ data }) => {
  const { placeLocation, userLocation } = data;

  return (
    <View style={{ marginLeft: 10, marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Nearby Ashrams, Hotels and Restaurants
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map((restaurant) => (
          <View key={restaurant.name} style={{ marginRight: 20 }}>
            <Image
              source={{ uri: restaurant.image }}
              style={{ width: 200, height: 150 }}
            />
            <Text>{restaurant.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Restaurants;
