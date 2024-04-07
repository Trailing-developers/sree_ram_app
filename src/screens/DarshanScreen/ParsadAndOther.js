import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const data = [
  {
    name: "Kedarnath",
    state: "Uttarakhand",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg",
  },
  {
    name: "Somnath",
    state: "Gujarat",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/220px-Somanath_mandir_%28cropped%29.jpg",
  },
  {
    name: "Vaishno Devi",
    state: "Katra, Jammu",
    imgUrl:
      "https://lh3.googleusercontent.com/p/AF1QipP_Hch3F6ImspvOZUbz8bWUksyQFehsM6rXEoUm=s1360-w1360-h1020",
  },
];

export const width = Dimensions.get("window").width;
export const IMAGE_HEIGHT = width * 0.5;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.cardContainer} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.state}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.7,
    justifyContent: "center",
    borderRadius: 20,
    shadowOpacity: 0.8,
    alignItems: "left",
    marginLeft: "2.5%",
    marginStart: 20,
  },
  image: {
    width: "100%",
    height: IMAGE_HEIGHT, // adjust as per your requirement
    resizeMode: "cover",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  wigetTitleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  wigetTitleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});

function ParsadAndOther() {
  const width = Dimensions.get("window").width;
  const baseOptions = {
    vertical: false,
    width: width * 0.85,
    height: width * 0.85,
  };
  return (
    <View style={{ flex: 1, paddingBottom: 10, height: IMAGE_HEIGHT + 150 }}>
      <View style={styles.wigetTitleContainer}>
        <Text style={styles.wigetTitleText}>Popular Temples to Visit</Text>
      </View>
      <Carousel
        {...baseOptions}
        loop={false}
        style={{ width: "100%" }}
        width={width * 0.85}
        height={width * 0.8}
        pagingEnabled={"true"}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={CarouselCardItem}
      />
    </View>
  );
}

export default ParsadAndOther;
