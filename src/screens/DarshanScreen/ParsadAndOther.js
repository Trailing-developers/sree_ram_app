import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

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
  const { data, wigetTitle } = d;
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

  const CarouselCardItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={() => handleCardPress(item)}>
        <View style={styles.cardContainer} key={index}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.state}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      key={wigetTitle}
      style={{ flex: 1, paddingBottom: 10, height: IMAGE_HEIGHT + 150 }}
    >
      <View style={styles.wigetTitleContainer}>
        <Text style={styles.wigetTitleText}>{wigetTitle}</Text>
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
