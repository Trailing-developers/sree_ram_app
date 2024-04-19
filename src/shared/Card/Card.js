import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, shadow, sizes } from "../../constants/theme";

export default function Card({
  children,
  style,
  onPress,
  shadowType = "light",
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, style, shadow[shadowType]]}
    >
      <View style={styles.inner}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 250,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  inner: {
    width: "100%",
    height: "100%",
  },
});
