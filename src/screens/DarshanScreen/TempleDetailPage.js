import React, { useMemo, useRef } from "react";
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
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import CustomTransition from "../animated/CustomTransition";
import TempleTitle from "./temple_detail_page/TempleTitle";
import * as Animatable from "react-native-animatable";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BottomSheetCustomHandler from "./temple_detail_page/BottomSheetCustomHandler";
import Divider from "./temple_detail_page/Divider";
import FastImage from "react-native-fast-image";
import { TEMPLE_DETAIL_PAGE } from "../../data";
import { TouchableHighlight } from "react-native-gesture-handler";
import { colors, fontSize } from "../../constants/theme";
import { useTemple } from "../../hooks/api/page";

const data = TEMPLE_DETAIL_PAGE;
const IMG_HEIGHT = 300;

const TempleDetailPage = ({ route }) => {
  const { item } = route.params;
  const { templeDetails, isLoading, error } = useTemple(item.pageId);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const spanPoints = useMemo(() => ["10%", "80%"], []);
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <AnimatedFastImage
          source={{
            uri: templeDetails?.data?.image,
          }}
          style={[styles.image, imageAnimatedStyle]}
        />

        <View style={styles.moreButton}>
          <TouchableHighlight
            title={"Photo"}
            onPress={() => navigation.push("TemplePhotoPage", { item })}
          >
            <Text
              style={{
                fontSize: fontSize.base,
              }}
            >
              Photos
            </Text>
          </TouchableHighlight>
        </View>

        <View style={{ backgroundColor: "#fff" }}>
          <TempleTitle
            title={templeDetails?.data?.name}
            address={templeDetails?.data?.address}
          />
          <Divider />
          <HistoryPage
            data={templeDetails?.data?.history}
            defaultImage={templeDetails?.data?.image}
          />
          <CrowdForecast data={data.crowdPatterns} />
          <ExtraInformation data={data.information} />
          <GodWorshippedPage data={templeDetails?.data?.gods} />
          <DarshanInfoPage data={templeDetails?.data?.darshanTypes} />
          {/* <NearByTemples
            data={{
              placeLocation: data.locationOfPlace,
              userLocation: data.locationOfUser,
            }}
          /> */}
          <Restaurants
            data={{
              placeLocation: data.locationOfPlace,
              userLocation: data.locationOfUser,
            }}
          />
          <View style={styles.bottomPadding} />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 400,
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
