import TrackPlayer, { useIsPlaying } from "react-native-track-player";
import { FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { colors } from "../../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PlayerControls = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <SkipToPreviousButton />
        <PlayPauseButton />
        <SkipToNextButton />
      </View>
    </View>
  );
};

export const PlayPauseButton = ({ style, iconSize = 48 }) => {
  const { playing } = useIsPlaying();

  return (
    <View style={[{ height: iconSize }, style]}>
      <TouchableOpacity
        onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
        activeOpactiy={0.5}
      >
        <FontAwesome6
          name={playing ? "pause" : "play"}
          size={iconSize}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export const SkipToNextButton = ({ iconSize = 30 }) => {
  return (
    <TouchableOpacity
      onPress={() => TrackPlayer.skipToNext()}
      activeOpacity={0.7}
    >
      <FontAwesome6 name="forward" size={iconSize} color={colors.primary} />
    </TouchableOpacity>
  );
};

export const SkipToPreviousButton = ({ iconSize = 30 }) => {
  return (
    <TouchableOpacity
      onPress={() => TrackPlayer.skipToPrevious()}
      activeOpacity={0.7}
    >
      <FontAwesome6 name="backward" size={iconSize} color={colors.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
