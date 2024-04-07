import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const data = {
  id: "temple-123",
  image: "https://example.com/temple-image.jpg",
  name: "Temple Name",
  description: "This is a detailed description of the temple.",
  address: "123 Main Street, Anytown USA",
  location: {
    latitude: 12.345678,
    longitude: 98.765432,
    distanceFromCityCenter: 5,
    distanceUnit: "KM",
  },
  crowdPatterns: {
    peakHours: "10 AM - 2 PM",
    averageCrowd: "Moderate",
    busyDays: ["Weekends", "Holidays"],
  },
  darshanTiming: {
    morning: "6:00 AM - 12:00 PM",
    afternoon: "3:00 PM - 6:00 PM",
    evening: "6:00 PM - 9:00 PM",
  },
  mantras: ["Om Namah Shivaya", "Shiva Shankara Bholenath", "Har Har Mahadev"],
  popularEvents: ["Diwali", "Holi", "Puja"],
  history: {
    firstVisit: "2010",
    desc: "The temple was built in the 10th century and has a rich history dating back to the Chola dynasty. It is known for its intricate carvings and architectural design.",
    backgroundImage: "https://example.com/temple-background.jpg",
    highlights: [
      "Dedicated to Lord Shiva",
      "Famous for its annual Pongal festival",
      "Attracts thousands of devotees during major festivals",
    ],
  },
  relatedStories: [
    {
      title: "The Legend of the Temple",
      content:
        "The temple was built in the 10th century and has a rich history dating back to the Chola dynasty. It is known for its intricate carvings and architectural design.",
      image: "https://example.com/temple-legend.jpg",
    },
    {
      title: "Devotees Flock to the Temple During Festivals",
      content:
        "The temple attracts thousands of devotees during major festivals like Diwali and Holi. The celebrations include traditional rituals, music, and dance performances.",
      image: "https://example.com/temple-festival.jpg",
    },
  ],
  godAndGoddess: [
    {
      name: "Lord Shiva",
      image: "https://example.com/lord-shiva.jpg",
    },
  ],
  information: {
    openingHours: "6:00 AM - 9:00 PM",
    contactInfo: {
      phone: "+1 (123) 456-7890",
      website: "https://example.com/temple",
    },
    facilities: [
      "Parking available",
      "Wheelchair accessible",
      "Free entry",
      "Photography allowed",
      "Audio guide available",
      "Gift shop on-site",
      "Lockers available",
      "Meditation room",
      "Vegetarian restaurant on-site",
      "Guided tours available",
      "Audio guide available in multiple languages",
      "Donation box on-site",
      "Drinking water available",
      "Restrooms available",
      "ATM on-site",
      "Cloakroom available",
      "Valet parking available",
      "Multilingual staff on-site",
      "Guided meditation sessions",
      "Yoga classes available",
      "Ayurvedic treatments available",
      "Meditation workshops conducted",
    ],
    restrictions: {
      noSmoking: true,
      noAlcohol: true,
      noPets: true,
      noFlash: true,
    },
  },
};

const TempleDetailPage = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <Text style={styles.address}>{item.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 300,
  },

  details: {
    alignItems: "center",
    padding: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    marginVertical: 10,
  },

  address: {
    fontSize: 14,
    color: "gray",
  },
});

export default TempleDetailPage;
