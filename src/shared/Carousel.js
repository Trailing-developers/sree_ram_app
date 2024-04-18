import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { sizes, spacing } from "../constants/theme";

const CARD_WIDTH = sizes.width - 80;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

export default function Carousel({ renderItems, items }) {
  return (
    <FlatList
      data={items}
      style={styles.container}
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item, index }) => {
        if (renderItems) {
          return renderItems({
            item,
            index,
            style: {
              width: CARD_WIDTH,
              marginLeft: spacing.l,
              marginRight: index === items.length - 1 ? spacing.l : 0,
            },
          });
        }
        return null;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.m,
    shadowColor: "#fff",
  },
});
