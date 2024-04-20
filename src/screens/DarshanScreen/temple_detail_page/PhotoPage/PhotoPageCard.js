import React from "react";
import { Text, View } from "react-native";
import Card from "../../../../shared/Card/Card";
import CardMedia from "../../../../shared/Card/CardMedia";

const PhotoPageCard = ({ item, index }) => {
  return (
    <View>
      <Card
        style={{
          width: "100%",
          height: index > 1 && index % 3 === 0 ? 180 : 240,
        }}
      >
        <CardMedia source={item.source} />
      </Card>
    </View>
  );
};

export default PhotoPageCard;
