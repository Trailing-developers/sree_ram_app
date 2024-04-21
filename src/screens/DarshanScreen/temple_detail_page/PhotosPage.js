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
    parents: ["photos"],
    isVisible: true,
    year: "2022",
  },
  {
    id: "2",
    source:
      "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg",
    type: "Aarti",
    parents: ["photos", "aarti", "night"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "3",
    source:
      "https://i.pinimg.com/736x/22/d8/25/22d825b76a28090e93efd7802af15e7f.jpg",
    type: "Mandir",
    parents: ["photos", "mandir", "night"],
    isVisible: false,
    date: "2022",
  },
  {
    id: "4",
    source:
      "https://i.pinimg.com/736x/56/8f/3c/568f3c7734d7f1596b7d165600958074.jpg",
    type: "Videos",
    parents: ["photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "5",
    source:
      "https://www.euttaranchal.com/tourism/photos/kedarnath-temple-3618171.jpg",
    type: "Photos",
    parents: ["photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "6",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsI9TKFfXKwGet1Gh7vE1S3lCEbFry2I7zClPL5ADRQ&s",
    type: "Photos",
    parents: ["photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "7",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCX03SrNPCzKwvVuz4M9HDNR8SMdJ0-9vmzKTspVHIjg&s",
    type: "Photos",
    parents: ["photos"],
    isVisible: true,
    date: "2022",
  },
  {
    id: "8",
    source:
      "https://assets.cntraveller.in/photos/60ba1486002baf698cc67003/1:1/w_1080,h_1080,c_limit/GettyImages-539105384.jpg",
    type: "Videos",
    parents: ["videos"],
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
    const data = photos.filter((photo) =>
      photo.parents.includes(tab.toLowerCase())
    );
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
