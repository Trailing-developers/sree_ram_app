import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
// import { SharedElement } from "react-navigation-shared-element";
import Animated from "react-native-reanimated";
import CustomTransition from "../animated/CustomTransition";
import Card from "../../shared/Card/Card";
import CardMedia from "../../shared/Card/CardMedia";
import CardContent from "../../shared/Card/CardContent";
import Carousel from "../../shared/Carousel";

export const width = Dimensions.get("window").width;
export const IMAGE_HEIGHT = width * 0.5;

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

function ParsadAndOther({ d }) {
  const { data, widgetTitle } = d;
  const width = Dimensions.get("window").width;
  const baseOptions = {
    vertical: false,
    width: width * 0.85,
    height: width * 0.85,
  };
  const navigation = useNavigation();
  const handleCardPress = (item) => {
    navigation.navigate("TempleDetailPage", { item });
  };

  const CarouselCardItem = ({ item, index, style }) => {
    return (
      <TouchableOpacity key={index} onPress={() => handleCardPress(item)}>
        <Card key={item.title} style={[styles.card, style]}>
          <CardMedia source={item.imgUrl} />
          <CardContent style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.state}</Text>
            </View>
          </CardContent>
        </Card>

        {/* </SharedElement> */}
      </TouchableOpacity>
    );
  };
  return (
    <View
      key={widgetTitle}
      style={{ flex: 1, paddingBottom: 10, height: IMAGE_HEIGHT + 150 }}
    >
      <View style={styles.wigetTitleContainer}>
        <Text style={styles.wigetTitleText}>{widgetTitle}</Text>
      </View>
      {/* <Carousel
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
      /> */}
      <Carousel items={data} renderItems={CarouselCardItem} />
    </View>
  );
}

export default ParsadAndOther;
