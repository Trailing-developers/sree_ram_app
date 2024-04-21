import React from "react";
import { View, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const MyYoutubePlayer = ({ source }) => {
  return (
    <YoutubePlayer
      videoId={source} // Replace VIDEO_ID with your YouTube video ID
      play={false}
      height={700}
      // style={styles.video}
    />
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
    // height: 300, // Adjust height as per your requirement
    width: "100%", // Adjust width as per your requirement
  },
});

export default MyYoutubePlayer;
