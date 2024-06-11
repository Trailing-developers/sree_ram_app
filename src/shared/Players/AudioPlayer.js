import { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { SONG_LIST } from "../../data";
import TrackListItem from "./AudioPlayer/TrackListItem";
import { colors, itemDivider, utilsStyles } from "../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { trackTitleFilter } from "../../helper/filter";
import TrackPlayer from "react-native-track-player";
import { useQueue } from "../../store/queue";
import SearchBar from "../../searchBarAdd/SearchBar";
import { useTrack } from "../../hooks/api/track";
import { BlurView } from "@react-native-community/blur";
import { useFloatingPlayer } from "../../hooks/FloatingPlayerContext";

export default function AudioPlayer({ route }) {
  const { id } = route.params;
  const { tracks, isLoading, error } = useTrack(id);
  const songData = tracks?.data?.songs;

  const { showPlayer } = useFloatingPlayer();

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
      return songData;
    } else {
      const normalizedSearchPhrase = searchPhrase.trim().toLowerCase();
      return songData.filter((item) =>
        item.title.toLowerCase().includes(normalizedSearchPhrase)
      );
    }
  }, [searchPhrase, songData]);

  const queueOffset = useRef(0);
  const { activeQueueId, setActiveQueueId } = useQueue();

  const handleTrackSelect = async (selectedTrack) => {
    // await TrackPlayer.load(selectedTrack);
    // await TrackPlayer.play();
    const trackIndex = songData.findIndex(
      (track) => track.url === selectedTrack.url
    );
    if (trackIndex === -1) return;

    const isChangingQueue = id !== activeQueueId;
    showPlayer();
    if (isChangingQueue) {
      const beforeTrack = songData.slice(0, trackIndex);
      const afterTrack = songData.slice(trackIndex + 1);
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
          ? songData.length + trackIndex - queueOffset.current
          : trackIndex - queueOffset.current;
      console.log(
        `trackIndex : ${trackIndex} , nextTrackIndex : ${nextTrackIndex}`
      );
      await TrackPlayer.skip(nextTrackIndex);
      TrackPlayer.play();
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Failed to fetch the data. Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <ImageBackground source={{ uri: tracks?.data?.image }}>
        <BlurView style={styles.absolute} blurType="light" blurAmount={20} />
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
                <Text style={itemDivider.emptyContentText}>
                  No songs found!
                </Text>
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
      </ImageBackground>
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
  backgroundImage: {
    flex: 1,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
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
