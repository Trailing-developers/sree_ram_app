import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { colors, spacing } from "../../../constants/theme";
import { Video } from "expo-av";
import { useEffect, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default VideoListItem = ({ item }) => {
  const [useNativeControls, setUseNativeControls] = useState(true);
  useEffect(() => {
    return () => setUseNativeControls(false);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View>
        {/* <FastImage
          source={{
            uri: item.thumbnail,
            priority: FastImage.priority.normal,
          }}
          style={{ ...styles.thumbnail }}
        /> */}
        {!item.isYoutube && (
          <Video
            source={{ uri: item.videoUrl }}
            style={{ ...styles.thumbnail }}
            posterSource={{ uri: item.thumbnail }}
            posterStyle={{ resizeMode: "cover" }}
            usePoster={false}
            useNativeControls={true}
            resizeMode="contain"
          />
        )}

        {item.isYoutube && (
          <YoutubePlayer
            videoId={item.videoUrl} // Replace VIDEO_ID with your YouTube video ID
            play={false}
            webViewStyle={{ ...styles.thumbnail }}
          />
        )}

        <View style={styles.timeContainer}>
          <Text style={styles.time}>15:15</Text>
        </View>
      </View>
      <View style={styles.titleRow}>
        <FastImage
          source={{ uri: item.user.image, priority: FastImage.priority.normal }}
          style={styles.avatarImage}
        />
        <View style={styles.videoDetails}>
          <Text style={styles.videoTitleText}>{item.title}</Text>
          <Text style={styles.videoSubTitleText}>{item.user.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  timeContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.6)",
    height: 25,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  time: {
    color: "white",
    fontWeight: "bold",
  },
  titleRow: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  videoDetails: {
    flexDirection: "column",
    flex: 1,
    paddingLeft: spacing.m,
    paddingRight: spacing.m,
  },
  videoTitleText: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.white,
  },
  videoSubTitleText: {
    fontSize: 15,
    color: colors.white,
    alignItems: "flex-start",
  },
});
