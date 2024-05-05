import TrackPlayer, { useIsPlaying } from "react-native-track-player";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";
import { colors } from "../../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PlayPauseButton = ({ style, iconSize }) => {
  const { playing } = useIsPlaying();

  return (
    <View style={[{ height: iconSize }, style]}>
      <TouchableOpacity
        onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
        activeOpactiy={0.5}
      >
        <FontAwesome
          name={playing ? "pause" : "play"}
          size={iconSize}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

export const SkipToNextButton = ({ iconSize }) => {
  return (
    <TouchableOpacity
      onPress={() => TrackPlayer.skipToNext}
      activeOpacity={0.7}
    >
      <FontAwesome6 name="forward" size={iconSize} color={colors.primary} />
    </TouchableOpacity>
  );
};

export const SkipToPreviousButton = ({ iconSize }) => {
  return (
    <TouchableOpacity
      onPress={() => TrackPlayer.skipToPrevious}
      activeOpacity={0.7}
    >
      <FontAwesome6 name="backward" size={iconSize} color={colors.primary} />
    </TouchableOpacity>
  );
};
