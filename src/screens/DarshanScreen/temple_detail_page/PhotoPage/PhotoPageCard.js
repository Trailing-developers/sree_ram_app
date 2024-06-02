import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../../../../shared/Card/Card";
import CardMedia from "../../../../shared/Card/CardMedia";
import MyYoutubePlayer from "../../../../shared/Players/MyYoutubePlayer";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PhotoPageCard = ({ item, index, itemList }) => {
  const navigation = useNavigation();

  // <TouchableOpacity
  //   onPress={() =>
  //     navigation.navigate("PhotoDetailPage", { index, itemList })
  //   }
  // >

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
          <MyYoutubePlayer source={item.media} />
        ) : (
          <CardMedia
            borderRadiusStyle={styles.borderRadiusStyle}
            borderRadius={false}
            source={item.media}
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
