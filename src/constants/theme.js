import { Dimensions, Image, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const unknownTrackImageUri = Image.resolveAssetSource(
  require("../../assets/unknown_track.png")
).uri;
export const unknownArtistImageUri = Image.resolveAssetSource(
  require("../../assets/unknown_artist.png")
).uri;

export const colors = {
  primary: "#070f18",
  gray: "#8b8989",
  lightGray: "#b2b2b2",
  light: "#fbfbfb",
  white: "#fff",
  black: "#000",
  bhagwa: "#FFC470",
  bhagwadark: "#FF6D03",
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  radius: 16,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};

export const itemDivider = StyleSheet.create({
  itemSeperator: {
    borderColor: colors.lightGray,
    borderWidth: StyleSheet.hairlineWidth,
    opacity: 0.3,
  },
  emptyContentText: {
    color: colors.gray,
    fontSize: 40,
    textAlign: "center",
    paddingVertical: spacing.m,
    marginTop: 20,
  },
});

export const styles = {
  colors,
  shadow,
  sizes,
  spacing,
  itemDivider,
};
