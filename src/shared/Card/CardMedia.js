import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { sizes } from "../../constants/theme";
import FastImage from "react-native-fast-image";

const CardMedia = ({
  source,
  borderRadius = false,
  borderRadiusStyle = null,
}) => {
  return (
    <View
      style={[styles.media].concat(
        borderRadius ? styles.bordorBottomRadius : borderRadiusStyle
      )}
    >
      <FastImage source={{ uri: source }} style={styles.image} />
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
    resizeMode: "stretch",
  },
  bordorBottomRadius: {
    borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
  },
  videoContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardMedia;
