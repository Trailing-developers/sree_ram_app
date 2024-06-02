import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const MyYoutubePlayer = ({ source }) => {
  const { width } = Dimensions.get("screen");
  return (
    <YoutubePlayer
      videoId={source} // Replace VIDEO_ID with your YouTube video ID
      play={false}
      height={700}
      width={width}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  video: {
    alignSelf: "stretch",
    height: 700, // Adjust height as per your requirement
    width: "100%", // Adjust width as per your requirement
  },
});

export default MyYoutubePlayer;
