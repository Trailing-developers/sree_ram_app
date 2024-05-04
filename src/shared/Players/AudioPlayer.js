import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TrackPlayer from "react-native-track-player";
import Icon from "react-native-vector-icons/FontAwesome";
import { SONG_LIST } from "../../data";
import TrackListItem from "./AudioPlayer/TrackListItem";
import { itemDivider } from "../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";

export default function AudioPlayer() {
  const search = useNavigationSearch({
    searchBarOptions: { placeholder: "Search Songs" },
  });
  const ItemDivider = () => {
    return (
      <View
        style={{
          ...itemDivider.itemSeperator,
          marginVertical: 9,
          marginLeft: 60,
        }}
      />
    );
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ ...styles.mainContainer, paddingHorizontal: 20 }}
    >
      <FlatList
        data={SONG_LIST}
        ItemSeparatorComponent={ItemDivider}
        scrollEnabled={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 128 }}
        renderItem={(item, index) => {
          return (
            <TrackListItem
              track={{
                title: item.item.title,
                artist: item.item.artist,
                image: item.item.artwork,
              }}
              scrollEnabled={false}
            />
          );
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  trackTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  trackArtist: {
    fontSize: 16,
    color: "#666",
  },
});
