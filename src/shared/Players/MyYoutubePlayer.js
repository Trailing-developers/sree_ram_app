import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const MyYoutubePlayer = ({ source }) => {
  const { width } = Dimensions.get("screen");

  return (
    <View style={styles.mainContainer}>
      <View>
        <YoutubePlayer
          videoId={source} // Replace VIDEO_ID with your YouTube video ID
          play={false}
          webViewStyle={{ ...styles.thumbnail }}
          height={700}
          width={width - 10}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  video: {
    alignSelf: "stretch",
    height: 700, // Adjust height as per your requirement
    width: "100%", // Adjust width as per your requirement
  },
  thumbnail: {
    borderRadius: 8,
  },
});

export default MyYoutubePlayer;
