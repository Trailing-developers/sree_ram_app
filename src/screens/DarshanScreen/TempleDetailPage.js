import React, { useMemo } from "react";
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
import GodWorshippedPage from "./temple_detail_page/GodWorshippedPage";
import NearByTemples from "./temple_detail_page/NearBytemples";
import DarshanInfoPage from "./temple_detail_page/DarshanInfoPage";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import CustomTransition from "../animated/CustomTransition";
import TempleTitle from "./temple_detail_page/TempleTitle";
import * as Animatable from "react-native-animatable";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BottomSheetCustomHandler from "./temple_detail_page/BottomSheetCustomHandler";
import Divider from "./temple_detail_page/Divider";

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
      { timing: 15, label: "5 PM", color: "#FF8C00" },
      { timing: 0, label: "", color: "#DF5353" },
    ], //peek - red, high - orange, moderate - yellow, low - green
    peakHours: "10 AM - 2 PM",
    averageCrowd: "Moderate",
    busyDays: ["Weekends", "Holidays"],
  },
  darshanDetails: {
    timing: {
      morning: "6:00 AM - 12:00 PM",
      afternoon: "3:00 PM - 6:00 PM",
      evening: "6:00 PM - 9:00 PM",
    },
    charges: {
      entry: {
        adult: 20,
        child: 10,
        senior: 10,
      },
      darshan: [
        {
          type: "Regular Darshan",
          price: 20,
        },
        {
          type: "Special Darshan",
          price: 100,
        },
        {
          type: "Regular Darshan",
          price: 20,
        },
        {
          type: "Hawan",
          price: 100,
        },
        {
          type: "Maha Abhishek",
          price: 20,
        },
        {
          type: "VIP Darshan",
          price: 100,
        },
      ],
    },
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
      image:
        "https://cdn.pixabay.com/photo/2023/11/26/10/04/lord-shiva-8413252_640.png",
      link: "https://en.wikipedia.org/wiki/Shiva",
    },
  ],
  information: {
    openingHours: "6:00 AM - 9:00 PM",
    closedDays: ["Mondays"],
    parking: {
      available: true,
      freeParking: true,
      parkingCharges: 0,
    },
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
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const spanPoints = useMemo(() => ["10%", "80%"], []);

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   <Image source={{ uri: item.imgUrl }} style={styles.image} />
    //   <View style={styles.details}>
    //     <Text style={styles.name}>{item.name}</Text>
    //     <Text style={styles.address}>{data.address}</Text>
    //   </View>
    //   <HistoryPage data={data.history} />
    //   <CrowdForecast data={data.crowdPatterns} />
    //   <ExtraInformation data={data.information} />
    //   <GodWorshippedPage data={data.godAndGoddess} />
    //   <DarshanInfoPage data={data.darshanDetails} />
    //   <NearByTemples
    //     data={{
    //       placeLocation: data.locationOfPlace,
    //       userLocation: data.locationOfUser,
    //     }}
    //   />
    //   <Restaurants
    //     data={{
    //       placeLocation: data.locationOfPlace,
    //       userLocation: data.locationOfUser,
    //     }}
    //   />
    //   <View style={styles.bottomPadding} />
    // </ScrollView>

    <View style={styles.container}>
      <Animatable.View
        style={[styles.backButton, { marginTop: insets.top }]}
        animation={"fadeInUp"}
        easing={"ease-in-out"}
        delay={500}
        duration={400}
      >
        <Icon
          name="arrow-left"
          size={30}
          color="#900"
          onPress={() => navigation.goBack()}
        />
      </Animatable.View>
      <Animated.View
        style={[StyleSheet.absoluteFillObject, styles.imageBox]}
        sharedTransitionTag={`item.${item.id}.image`}
        sharedTransitionStyle={CustomTransition}
      >
        <Image
          source={{
            uri: item.imgUrl,
          }}
          style={[StyleSheet.absoluteFillObject, styles.image]}
        />
      </Animated.View>
      <BottomSheet
        snapPoints={spanPoints}
        visible={true}
        index={0}
        handleComponent={BottomSheetCustomHandler}
      >
        <TempleTitle title={item.name} address={data.address} />
        <Divider />
        <BottomSheetScrollView>
          <HistoryPage data={data.history} />
          <CrowdForecast data={data.crowdPatterns} />
          <ExtraInformation data={data.information} />
          <GodWorshippedPage data={data.godAndGoddess} />
          <DarshanInfoPage data={data.darshanDetails} />
          <NearByTemples
            data={{
              placeLocation: data.locationOfPlace,
              userLocation: data.locationOfUser,
            }}
          />
          <Restaurants
            data={{
              placeLocation: data.locationOfPlace,
              userLocation: data.locationOfUser,
            }}
          />
          <View style={styles.bottomPadding} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

// TempleDetailPage.sharedElements = (route) => {
//   const { item } = route.params;
//   return [
//     {
//       id: `item.${item.id}.image`,
//     },
//   ];
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    borderRadius: 50,
  },

  details: {
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
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
