import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { interpolate } from "react-native-reanimated";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";
import { useHomeWidgets } from "../../hooks/api/widgets";

export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8) + 10;
export const width = Dimensions.get("window").width;
export const IMAGE_HEIGHT = width * 0.7;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container2} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    margin: 20,
    padding: 50,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  container2: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

function TrailCarousel() {
  const { data, isLoading, error } = useHomeWidgets();

  const homeBanners = useMemo(() => {
    if (!data) return [];
    return data?.data?.filter((item) => item?.type === "BANNER")[0].data;
  }, [data]);

  if (error) return <Text>Something went wrong.</Text>;

  if (isLoading)
    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  const width = Dimensions.get("window").width;

  const animationStyle = (value) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ scale }],
      zIndex,
      opacity,
    };
  };

  return (
    <View style={{ flex: 1, paddingBottom: 10 }}>
      <Carousel
        loop={true}
        width={width}
        height={IMAGE_HEIGHT}
        autoPlay={false}
        data={homeBanners}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={CarouselCardItem}
        customAnimation={animationStyle}
      />
    </View>
  );
}

export default TrailCarousel;
