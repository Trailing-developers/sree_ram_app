import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";
import { ActivityIndicator } from "react-native-paper";
import {
  colors,
  defaultStyles,
  fontSize,
  unknownTrackImageUri,
} from "../../../constants/theme";
import FastImage from "react-native-fast-image";
import { MovingText } from "./MovingText";
import { FontAwesome } from "@expo/vector-icons";
import { PlayerControls } from "./PlayerControl";
import { PlayerProgressBar } from "./PlayerProgressBar";
import { PlayerVolumeBar } from "./PlayerVolumeBar";
import { PlayerRepeatToggle } from "./PlayerRepeatToggle";

export default PlayerScreen = () => {
  const activeTrack = useActiveTrack();
  const { top, bottom } = useSafeAreaInsets();
  const isFavorite = false;
  if (!activeTrack) {
    return (
      <View style={[defaultStyles.container, { justifyContent: "center" }]}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.overlayContainer}>
      <DismissPlayerSymbol />
      <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>
        <View style={styles.artworkContainer}>
          <FastImage
            source={{
              uri: activeTrack.artwork ?? unknownTrackImageUri,
              priority: FastImage.priority.high,
            }}
            resizeMode="cover"
            style={styles.artworkImage}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ marginTop: "auto" }}>
            <View style={{ height: 60 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={styles.trackTitleTextContainer}>
                  <MovingText
                    text={activeTrack.title ?? ""}
                    animationThreshold={30}
                    style={styles.trackTitleText}
                  />
                </View>
                <FontAwesome
                  name={isFavorite ? "heart" : "heart-o"}
                  size={24}
                  color={colors.white}
                  style={{ marginHorizontal: 14 }}
                  onPress={() => {
                    console.log("favorite pressed!!");
                  }}
                />
              </View>
              {activeTrack.artist && (
                <Text
                  numberOfLines={1}
                  style={[styles.trackArtistText, { marginTop: 6 }]}
                >
                  {activeTrack.artist}
                </Text>
              )}
            </View>
            <PlayerProgressBar style={{ marginTop: 32 }} />
            <PlayerControls style={{ marginTop: 40, marginBottom: 30 }} />
            <PlayerVolumeBar style={{ marginTop: "auto", marginBottom: 30 }} />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const DismissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        position: "absolute",
        top: top + 8,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        accessible={true}
        style={{
          width: 50,
          height: 10,
          borderRadius: 18,
          backgroundColor: "#fff",
          opacity: 0.7,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.bhagwa,
    justifyContent: "center",
    alignItems: "center",
  },
  artworkContainer: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: "row",
    justifyContent: "center",
    height: "45%",
  },
  artworkImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  trackTitleTextContainer: {
    flex: 1,
    overflow: "hidden",
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: 22,
    color: colors.primary,
    fontWeight: "700",
  },
  trackArtistText: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    color: colors.primary,
    opacity: 0.8,
    maxWidth: "90%",
  },
});
