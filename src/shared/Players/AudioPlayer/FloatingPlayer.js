import { TouchableOpacity } from "react-native-gesture-handler";
import TrackPlayer, { useActiveTrack } from "react-native-track-player";
import { colors, unknownTrackImageUri } from "../../../constants/theme";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { PlayPauseButton, SkipToNextButton } from "./PlayerControl";
import FastImage from "react-native-fast-image";
import { useLastActiveTrack } from "../../../hooks/useLastActiveTrack";
import { MovingText } from "./MovingText";
// import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useFloatingPlayer } from "../../../hooks/FloatingPlayerContext";

export const FloatingPlayer = ({ style }) => {
  const { isPlayerVisible, dismissPlayer } = useFloatingPlayer();
  const activeTrack = useActiveTrack();

  const navigation = useNavigation();

  const lastActiveTrack = useLastActiveTrack();

  const handlePress = () => {
    navigation.navigate("PlayerScreen");
  };

  const displayTrack = activeTrack ?? lastActiveTrack;

  if (!displayTrack) return null;

  const closePlayer = () => {
    TrackPlayer.stop();
    dismissPlayer();
  };

  return (
    isPlayerVisible && (
      <>
        <Button title="Close" onPress={closePlayer} />
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.9}
          style={[styles.container, style]}
        >
          <FastImage
            source={{ uri: displayTrack.artwork ?? unknownTrackImageUri }}
            style={styles.trackArtworkImage}
          />
          <View style={styles.trackTitleContainer}>
            <MovingText
              style={styles.trackTitle}
              text={displayTrack.title ?? ""}
              animationThreshold={25}
            />
          </View>
          <View style={styles.trackControlContainer}>
            <PlayPauseButton iconSize={24} />
            <SkipToNextButton iconSize={22} />
          </View>
        </TouchableOpacity>
      </>
    )
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
