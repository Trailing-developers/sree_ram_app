import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { sizes } from "../../constants/theme";

const CardMedia = ({ source, borderRadius = false }) => {
  return (
    <View
      style={[styles.media].concat(
        borderRadius ? styles.bordorBottomRadius : null
      )}
    >
      <Image source={{ uri: source }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  media: {
    flex: 1,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  bordorBottomRadius: {
    borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
  },
});

export default CardMedia;
