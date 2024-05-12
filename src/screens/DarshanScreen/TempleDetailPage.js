import React, { useMemo } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
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
    {
      name: "Lord Krishna",
      image:
        "https://blog.cdn.level.game/2023/10/manishaleveldesigner_render_lord_krishna_image_in_landscape_hor_2a16ba8f-8329-4cd1-8542-589638dbdb09.png",
      link: "https://en.wikipedia.org/wiki/Krishna",
    },
    {
      name: "Lord Ganesh",
      image:
        "https://img.freepik.com/premium-photo/indian-god-ganesh-ganesha-hindu-elephant-god-indian-god-ganesh-hd-wallpaper_583952-7084.jpg?w=740",
      link: "https://en.wikipedia.org/wiki/Ganesh",
    },
    {
      name: "Virabhadra",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41449218-133a-4eae-b2c2-c7a14ded6e1c/dg5xvkj-f5f9f984-0e9a-4612-93cd-3ef6417fa0c9.png/v1/fill/w_784,h_1019,q_70,strp/virabhadra______by_akshaylasunkute_dg5xvkj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY2MyIsInBhdGgiOiJcL2ZcLzQxNDQ5MjE4LTEzM2EtNGVhZS1iMmMyLWM3YTE0ZGVkNmUxY1wvZGc1eHZrai1mNWY5Zjk4NC0wZTlhLTQ2MTItOTNjZC0zZWY2NDE3ZmEwYzkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.O_kHPT607z002Px26La-nlAPVK-UnA8D3Ed0NGzJFdE",
      link: "https://en.wikipedia.org/wiki/Virabhadra",
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
    <View style={styles.container}>
      <Animatable.View
        style={[styles.backButton]}
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
      <Animatable.View
        style={[styles.moreButton, { marginRight: insets.right }]}
        animation={"fadeInUp"}
        easing={"ease-in-out"}
        delay={500}
        duration={400}
      >
        <Button
          title={"Photos"}
          onPress={() => navigation.push("TemplePhotoPage", { item })}
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
  moreButton: {
    position: "absolute",
    top: 20,
    right: 20,
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
