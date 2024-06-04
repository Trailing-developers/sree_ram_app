import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { SONG_LIST } from "../../data";
import TrackListItem from "./AudioPlayer/TrackListItem";
import { itemDivider, utilsStyles } from "../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { trackTitleFilter } from "../../helper/filter";
import TrackPlayer from "react-native-track-player";
import { useQueue } from "../../store/queue";
import SearchBar from "../../searchBarAdd/SearchBar";

export default function AudioPlayer({ id = 1 }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  // const search = useNavigationSearch({
  //   searchBarOptions: { placeholder: "Search Songs" },
  // });
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
    if (!searchPhrase.trim()) {
      return SONG_LIST;
    } else {
      const normalizedSearchPhrase = searchPhrase.trim().toLowerCase();
      return SONG_LIST.filter((item) =>
        item.title.toLowerCase().includes(normalizedSearchPhrase)
      );
    }
  }, [searchPhrase]);

  const queueOffset = useRef(0);
  const { activeQueueId, setActiveQueueId } = useQueue();

  const handleTrackSelect = async (selectedTrack) => {
    // await TrackPlayer.load(selectedTrack);
    // await TrackPlayer.play();
    const trackIndex = SONG_LIST.findIndex(
      (track) => track.url === selectedTrack.url
    );
    if (trackIndex === -1) return;

    const isChangingQueue = id !== activeQueueId;
    if (isChangingQueue) {
      const beforeTrack = SONG_LIST.slice(0, trackIndex);
      const afterTrack = SONG_LIST.slice(trackIndex + 1);
      await TrackPlayer.reset();
      await TrackPlayer.add(selectedTrack);
      await TrackPlayer.add(afterTrack);
      await TrackPlayer.add(beforeTrack);

      await TrackPlayer.play();

      queueOffset.current = trackIndex;
      setActiveQueueId(id);
    } else {
      const nextTrackIndex =
        trackIndex - queueOffset.current < 0
          ? SONG_LIST.length + trackIndex - queueOffset.current
          : trackIndex - queueOffset.current;
      console.log(
        `trackIndex : ${trackIndex} , nextTrackIndex : ${nextTrackIndex}`
      );
      await TrackPlayer.skip(nextTrackIndex);
      TrackPlayer.play();
    }
  };

  return (
    <SafeAreaView>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
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
          ListEmptyComponent={
            <View>
              <Text style={itemDivider.emptyContentText}>No songs found!</Text>
            </View>
          }
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
    </SafeAreaView>
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
