import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import { colors, unknownTrackImageUri } from "../../../constants/theme";

export default TrackListItem = ({ track }) => {
  const isActiveTrack = false;
  return (
    <TouchableHighlight>
      <View style={styles.trackItemContainer}>
        <View>
          <FastImage
            source={{
              uri: track.image ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={[
              styles.trackArtworkImage,
              (opacity = isActiveTrack ? 0.6 : 1),
            ]}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text
            numberOfLines={1}
            style={[
              styles.trackTitleText,
              (color = isActiveTrack ? colors.primary : colors.black),
            ]}
          >
            {track.title}
          </Text>
          <Text styles={styles.trackArtistText}>{track.artist}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
    paddingRight: 10,
  },
  trackArtworkImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  trackTitleText: {
    fontSize: 16,
    color: colors.black,
    marginTop: 10,
    fontWeight: "600",
    maxWidth: "90%",
  },
  trackArtistText: {
    fontSize: 14,
    color: colors.black,
    marginTop: 4,
  },
});
