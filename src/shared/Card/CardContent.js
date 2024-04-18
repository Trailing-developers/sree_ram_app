import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { spacing } from "../../constants/theme";

const CardContent = ({ children, style }) => {
  return <View style={[styles.content, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alighnItems: "flex-start",
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.l / 2,
  },
});

export default CardContent;
