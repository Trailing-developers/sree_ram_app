import { RepeatMode } from "react-native-track-player";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../constants/theme";
import { useTrackPlayerRepeatMode } from "../../../hooks/useTrackPlayerRepeatMode";

const repeatOrder = [RepeatMode.Off, RepeatMode.Track, RepeatMode.Queue];

export const PlayerRepeatToggle = ({ ...iconProps }) => {
  const { repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode();

  const toggleRepeatMode = () => {
    if (repeatMode == null) return;
    const currentIndex = repeatOrder.indexOf(repeatMode);
    const nextIndex = (currentIndex + 1) % repeatOrder.length;
    changeRepeatMode(repeatOrder[nextIndex]);
  };

  const icon = {};
  icon[RepeatMode.Off] = "repeat-off";
  icon[RepeatMode.Track] = "repeat-once";
  icon[RepeatMode.Queue] = "repeat";

  return (
    <MaterialCommunityIcons
      name={icon[repeatMode]}
      onPress={toggleRepeatMode}
      color={colors.primary}
      {...iconProps}
    />
  );
};
