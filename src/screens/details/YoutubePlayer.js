import React from "react";
import { View, StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

const YoutubePlayer = () => {
  return (
    <View style={styles.container}>
      <YouTube
        videoId="MOVP098fCVg" // Replace VIDEO_ID with your YouTube video ID
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    alignSelf: "stretch",
    height: 300, // Adjust height as per your requirement
  },
});

export default YoutubePlayer;
