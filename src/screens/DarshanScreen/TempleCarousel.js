import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

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

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.cardContainer} key={index}>
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
    top: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

function TempleCarousel() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1, paddingBottom: 10 }}>
      <Carousel
        loop
        width={width}
        height={IMAGE_HEIGHT}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={CarouselCardItem}
      />
    </View>
  );
}

export default TempleCarousel;
