import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import MasonryList from "@react-native-seoul/masonry-list";
import Tabs from "../../../shared/Tabs";
import { spacing } from "../../../constants/theme";
import PhotoPageCard from "./PhotoPage/PhotoPageCard";

const photos = [
  {
    id: "1",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Photos",
    parents: ["Photos"],
    isVisible: true,
    year: "2022",
  },
  {
    id: "2",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Aarti",
    parents: ["Photos", "Aarti"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "3",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Mandir",
    parents: ["Photos", "Mandir"],
    isVisible: false,
    date: "2022",
  },
  {
    id: "4",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Videos",
    parents: ["Photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "5",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Photos",
    parents: ["Photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "6",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Photos",
    parents: ["Photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "7",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Photos",
    parents: ["Photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "8",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Videos",
    parents: ["Videos"],
    isVisible: true,
    date: "2022",
  },
];

const tabList = [
  ...new Set(
    photos.filter((photo) => photo.isVisible).map((photo) => photo.type)
  ),
];

const PhotosPage = () => {
  const tabContent = tabList.map((tab) => {
    console.log(tab);
    const data = photos.filter((photo) => photo.parents.includes(tab));
    return {
      type: tab,
      contentView: () => (
        <MasonryList
          data={data}
          key={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.masonary}
          renderItem={({ item, i }) => <PhotoPageCard item={item} index={i} />}
          refreshing={false}
        />
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Tabs items={tabContent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    resizeMode: "stretch",
  },
  masonary: {
    paddingHorizontal: spacing.s,
  },
});

export default PhotosPage;
