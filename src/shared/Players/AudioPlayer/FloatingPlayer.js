import { TouchableOpacity } from "react-native-gesture-handler";
import { useActiveTrack } from "react-native-track-player";
import { colors, unknownTrackImageUri } from "../../../constants/theme";
import { StyleSheet, Text, View } from "react-native";
import { PlayPauseButton, SkipToNextButton } from "./PlayerControl";
import FastImage from "react-native-fast-image";

export const FloatingPlayer = ({ style }) => {
  const activeTrack = useActiveTrack();

  const displayTrack = activeTrack ?? {
    title: "this is a song",
  };
  console.log("floating player active track", displayTrack);

  if (!displayTrack) return null;

  return (
    <TouchableOpacity activeOpacity={0.9} style={[styles.container, style]}>
      <>
        <FastImage
          source={{ uri: displayTrack.artwork ?? unknownTrackImageUri }}
          style={styles.trackArtworkImage}
        />
        <View style={styles.trackTitleContainer}>
          <Text style={styles.trackTitle}>{displayTrack.title}</Text>
        </View>
        <View style={styles.trackControlContainer}>
          <PlayPauseButton iconSize={24} />
          <SkipToNextButton iconSize={22} />
        </View>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  trackArtworkImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  trackTitle: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "600",
    paddingLeft: 10,
    textAlign: "center",
  },
  trackTitleContainer: {
    flex: 1,
    overflow: "hidden",
    marginLeft: 10,
  },
  trackControlContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginRight: 16,
    paddingLeft: 16,
  },
});
