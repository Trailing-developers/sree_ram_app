import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNearbyHotels } from "../../../hooks/api/nearbysearch";
import { colors } from "../../../constants/theme";

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
  const { nearbyHotelsData, isLoading, error } = useNearbyHotels(
    placeLocation.lat,
    placeLocation.lng
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Failed to fetch the data. Error: {error.message}</Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={{ marginLeft: 10, marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Nearby Ashrams, Hotels and Restaurants
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {nearbyHotelsData?.data?.data?.map((restaurant) => (
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

const styles = StyleSheet.create({});

export default Restaurants;
