import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { colors, itemDivider } from "../../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Slider } from "react-native-awesome-slider";
import { useTrackPlayerVolume } from "../../../hooks/useTrackPlayerVolume";

export const PlayerVolumeBar = ({ style }) => {
  const { volume, updateVolume } = useTrackPlayerVolume();
  const progress = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(1);

  progress.value = volume ?? 0;

  return (
    <View style={style}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name="volume-low"
          size={20}
          color={colors.icon}
          style={{ opacity: 0.8, marginRight: 10 }}
        />
        <Slider
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          containerStyle={itemDivider.slider}
          thumbWidth={0}
          renderBubble={() => null}
          onValueChange={(value) => {
            updateVolume(value);
          }}
          theme={{
            minimumTrackTintColor: colors.minimumTrackTintColor,
            maximumTrackTintColor: colors.maximumTrackTintColor,
          }}
        />
        <Ionicons
          name="volume-high"
          size={20}
          color={colors.icon}
          style={{ opacity: 0.8, marginLeft: 10 }}
        />
      </View>
    </View>
  );
};
