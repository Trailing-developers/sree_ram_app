import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import HistoryPage from "./temple_detail_page/HistoryPage";
import CrowdForecast from "./temple_detail_page/CrowdForecast";
import Restaurants from "./temple_detail_page/Restaurents";
import ExtraInformation from "./temple_detail_page/ExtraInformation";

const data = {
  id: "temple-123",
  image: "https://example.com/temple-image.jpg",
  name: "Temple Name",
  description: "This is a detailed description of the temple.",
  address: "123 Main Street, Anytown USA",
  locationOfPlace: {
    latitude: 12.345678,
    longitude: 98.765432,
    distanceFromCityCenter: 5,
    distanceUnit: "KM",
    distanceFromUser: 10,
    distanceUnit: "KM",
  },
  locationOfUser: {
    latitude: 12.345678,
    longitude: 98.765432,
  },
  crowdPatterns: {
    timings: [
      { timing: 8, label: "8 AM", color: "#FFB800" },
      { timing: 15, label: "", color: "#FF9900" },
      { timing: 20, label: "", color: "#FF730D" },
      { timing: 15, label: "12 PM", color: "#FF730D" },
      { timing: 5, label: "", color: "#25FF20" },
      { timing: 15, label: "", color: "#FF730D" },
      { timing: 25, label: "3 PM", color: "#FA1111" },
      { timing: 15, label: "", color: "#FF8C00" },
      { timing: 0, label: "", color: "#DF5353" },
    ], //peek - red, high - orange, moderate - yellow, low - green
    peakHours: "10 AM - 2 PM",
    candleHours: 3, //8 candles
    averageCrowd: "Moderate",
    busyDays: ["Weekends", "Holidays"],
  },
  darshanTiming: {
    morning: "6:00 AM - 12:00 PM",
    afternoon: "3:00 PM - 6:00 PM",
    evening: "6:00 PM - 9:00 PM",
  },
  rightTimeToVist: {
    bestTime: "Jan-Mar",
    notBestTime: "Jan-Mar",
    bestDays: ["Weekdays", "Weekends"],
  },
  mantras: ["Om Namah Shivaya", "Shiva Shankara Bholenath", "Har Har Mahadev"],
  popularEvents: ["Diwali", "Holi", "Puja"],
  history: {
    openedOn: "2010",
    builder: "Chola Dynasty",
    desc: "The temple was built in the 10th century and has a rich history dating back to the Chola dynasty. It is known for its intricate carvings and architectural design.",
    backgroundImage:
      "https://t4.ftcdn.net/jpg/05/71/56/51/360_F_571565144_1BivKAfVmv64ieXYkeKMWmg5GCUpx3Rr.jpg",
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
    closedDays: ["Mondays"],
    contactInfo: {
      phone: "+1 (123) 456-7890",
      website: "https://example.com/temple",
    },
    dosAndDonts: [
      {
        title: "Do's",
        data: [
          "Dress modestly and respectfully",
          "Remove shoes before entering temple",
          "Bring offerings like flowers, fruits, sweets",
        ],
      },
      {
        title: "Don'ts",
        data: [
          "Dont wear shorts or sleeveless tops",
          "Avoid bringing non-vegetarian food items",
          "Avoid bringing alcohol or tobacco products",
        ],
      },
    ],
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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{data.address}</Text>
      </View>
      <HistoryPage data={data.history} />
      <CrowdForecast data={data.crowdPatterns} />
      <ExtraInformation data={data.information} />
      <Restaurants
        data={{
          placeLocation: data.locationOfPlace,
          userLocation: data.locationOfUser,
        }}
      />
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  address: {
    fontSize: 14,
    color: "gray",
  },
  historyContainer: {
    marginVertical: 20,
    width: "100%",
    height: 200,
    elevation: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // Overlay color
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Adjust the borderRadius value to match the parent container
  },
  ImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20, // Adjust the borderRadius value as needed
    overflow: "hidden", // Ensure content is clipped to border radius
  },

  bottomPadding: {
    height: 100, // Adjust the height as needed to ensure content is scrollable till the end
  },
});

export default TempleDetailPage;
