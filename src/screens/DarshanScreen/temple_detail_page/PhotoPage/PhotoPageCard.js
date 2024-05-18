import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../../../../shared/Card/Card";
import CardMedia from "../../../../shared/Card/CardMedia";
import MyYoutubePlayer from "../../../../shared/Players/MyYoutubePlayer";
import { spacing } from "../../../../constants/theme";

const PhotoPageCard = ({ item, index }) => {
  return (
    <View>
      <Card
        style={{
          width: item.isVideo ? 440 : "100%",
          height: !item.isVideo && index > 1 && index % 3 === 0 ? 180 : 240,
          marginBottom: item.isVideo ? 15 : 0,
        }}
      >
        {item.isVideo ? (
          <MyYoutubePlayer source={item.source} />
        ) : (
          <CardMedia
            borderRadiusStyle={styles.borderRadiusStyle}
            borderRadius={false}
            source={item.source}
            isVideo={item.isVideo}
          />
        )}
      </Card>
    </View>
  );
};

export default PhotoPageCard;

const styles = StyleSheet.create({
  borderRadiusStyle: {
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
  },
});
