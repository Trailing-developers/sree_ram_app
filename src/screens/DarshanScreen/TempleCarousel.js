import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDarshanWidgets } from "../../hooks/api/widgets";
import { useCallback, useMemo } from "react";

const data = [
  {
    title: "Ayodhya Shree Ram Mandir",
    body: "Ayodhya Shree Ram Mandir is a famous Hindu temple located in Ayodhya, Uttar Pradesh, India. It is one of the most important pilgrimage sites for devotees of Lord Ram.",
    imgUrl:
      "https://www.livemint.com/lm-img/img/2024/01/21/600x338/Ram_Temple_in_Ayodhya_1705838563493_1705838563927.jpg",
  },
  {
    title: "Hanuman Gadi",
    body: "Hanuman Gadi is a famous temple located in Ayodhya, Uttar Pradesh, India. It is one of the most important pilgrimage sites for devotees of Lord Hanuman.",
    imgUrl:
      "https://images1.livehindustan.com/uploadimage/library/2024/01/06/16_9/16_9_6/hanuman_garhi_1704510100.jpg",
  },
  {
    title: "Kedarnath",
    body: "Place of worship for Lord Shiva",
    imgUrl:
      "https://img.invinciblengo.org/iconscout/f:jpeg/w:2000/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/trek/439bc989-b47a-4fa5-a410-acc44e93dbff",
  },
];

export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1) + 10;
export const width = Dimensions.get("window").width;
export const IMAGE_HEIGHT = width * 0.7;
export const PAGE_WIDTH = width;

const styles = StyleSheet.create({
  cardContainer: {
    width,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: IMAGE_HEIGHT, // adjust as per your requirement
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

function TempleCarousel() {
  const { data, isLoading, error } = useDarshanWidgets();

  const darshanBanner = useMemo(() => {
    if (!data) return [];
    return data?.data.filter((item) => item?.type === "BANNER")[0].data;
  }, [data]);

  const animationStyle = useCallback((value) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [300, 0, -300]);
    const translateX = interpolate(value, [-1, 0, 1], [0, 0, 0]);

    return {
      transform: [{ translateX }],
      zIndex,
    };
  }, []);

  if (error) return <Text>Something went wrong.</Text>;

  if (isLoading)
    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        autoPlay={true}
        style={{ width: PAGE_WIDTH, height: 240 }}
        width={width}
        data={darshanBanner}
        renderItem={({ index, item, animationValue }) => {
          return (
            <Item
              key={index}
              width={PAGE_WIDTH}
              animationValue={animationValue}
              item={item}
            />
          );
        }}
        customAnimation={animationStyle}
        scrollAnimationDuration={1200}
      />
    </View>
  );

  function Item({ width, item, animationValue }) {
    const leftStyle = useAnimatedStyle(() => {
      const left = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [-(width / 2), 0, 0],
        Extrapolate.CLAMP
      );
      return {
        left,
      };
    }, [animationValue, width]);

    const rightStyle = useAnimatedStyle(() => {
      const right = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [-(width / 2), 0, 0],
        Extrapolate.CLAMP
      );

      return {
        right,
      };
    }, [animationValue, width]);

    return (
      <View style={{ height: "100%", width }}>
        <Animated.View
          style={[
            {
              left: 0,
              position: "absolute",
              width: width / 2,
              height: "100%",
              overflow: "hidden",
            },
            leftStyle,
          ]}
        >
          <Animated.Image
            source={{ uri: item.imgUrl }}
            style={{
              width,
              height: "100%",
              left: 0,
              position: "absolute",
            }}
            resizeMode="cover"
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              right: 0,
              position: "absolute",
              width: width / 2,
              height: "100%",
              overflow: "hidden",
            },
            rightStyle,
          ]}
        >
          <Animated.Image
            source={{ uri: item.imgUrl }}
            style={{
              width,
              height: "100%",
              right: 0,
              position: "absolute",
            }}
            resizeMode="cover"
          ></Animated.Image>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default TempleCarousel;
