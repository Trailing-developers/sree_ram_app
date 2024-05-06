import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import { colors, unknownTrackImageUri } from "../../../constants/theme";
import { useActiveTrack, useIsPlaying } from "react-native-track-player";
import { Entypo } from "@expo/vector-icons";
import LoaderKit from "react-native-loader-kit";
import { Ionicons } from "@expo/vector-icons";

export default TrackListItem = ({ track, handleTrackSelect }) => {
  const playing = useIsPlaying();
  const isActiveTrack = useActiveTrack()?.url === track.url;
  return (
    <TouchableHighlight
      onPress={() => {
        handleTrackSelect(track);
      }}
    >
      <View style={styles.trackItemContainer}>
        <View>
          <FastImage
            source={{
              uri: track.artwork ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.7 : 1,
            }}
          />
          {isActiveTrack &&
            (playing.playing ? (
              <LoaderKit
                style={styles.trackPlayingIconIndicator}
                name="LineScaleParty"
                color={colors.primary}
              />
            ) : (
              <Ionicons
                style={styles.trackPausedIconIndicator}
                name="play"
                size={24}
                color={colors.primary}
              />
            ))}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ width: "100%" }}>
            <Text
              numberOfLines={1}
              style={{
                ...styles.trackTitleText,
                color: isActiveTrack ? colors.bhagwadark : colors.primary,
              }}
            >
              {track.title}
            </Text>
            <Text styles={styles.trackArtistText}>{track.artist}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color={colors.primary}
          />
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
    paddingRight: 20,
  },
  trackPlayingIconIndicator: {
    position: "absolute",
    top: 18,
    left: 16,
    width: 16,
    height: 16,
  },
  trackPausedIconIndicator: {
    position: "absolute",
    top: 14,
    left: 16,
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
