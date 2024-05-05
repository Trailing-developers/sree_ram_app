import { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SONG_LIST } from "../../data";
import TrackListItem from "./AudioPlayer/TrackListItem";
import { itemDivider } from "../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { trackTitleFilter } from "../../helper/filter";
import TrackPlayer from "react-native-track-player";

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

  const filteredSongs = useMemo(() => {
    if (!search) return SONG_LIST;
    return SONG_LIST.filter(trackTitleFilter(search));
  }, [search]);

  const handleTrackSelect = async (track) => {
    await TrackPlayer.load(track);
    await TrackPlayer.play();
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ ...styles.mainContainer, paddingHorizontal: 20 }}
    >
      <FlatList
        data={filteredSongs}
        ItemSeparatorComponent={ItemDivider}
        scrollEnabled={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 128 }}
        ListFooterComponent={ItemDivider}
        renderItem={(item, index) => {
          return (
            <TrackListItem
              track={{ ...item.item }}
              scrollEnabled={false}
              handleTrackSelect={handleTrackSelect}
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
