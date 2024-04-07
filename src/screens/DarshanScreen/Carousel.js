import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
//TODO experiment react native carousels working
const { width } = Dimensions.get("window");

const Carousel = ({ data }) => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    // <Animated.ScrollView
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   pagingEnabled
    //   onScroll={scrollHandler}
    //   scrollEventThrottle={16}
    // >
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.cardContainer}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
          <Text style={styles.text}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200, // adjust as per your requirement
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Carousel;
