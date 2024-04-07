import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const data = [
  {
    title: "Parsad",
    body: "I love holi",
    imgUrl:
      "https://t4.ftcdn.net/jpg/05/60/58/67/360_F_560586710_VmIHNuH6TcdLHIn3cEuIDDAcCYBhkIL0.jpg",
  },
  {
    title: "Other items",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://images.indianexpress.com/2020/11/diwali-feature-1.jpg",
  },
  {
    title: "Other items",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl:
      "https://media.gettyimages.com/id/458583265/photo/goddess-during-durga-puja-celebrations.jpg?s=612x612&w=gi&k=20&c=InuPVvTsHwQh7Q6bR_e2ZjtnaXYC1HwPNzDNLCUN2dU=",
  },
];

export const width = Dimensions.get("window").width;
export const IMAGE_HEIGHT = width * 0.5;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.cardContainer} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
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
    fontSize: 18,
    fontWeight: "bold",
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
