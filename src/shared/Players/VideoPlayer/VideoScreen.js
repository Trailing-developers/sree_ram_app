import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { VIDEO_LIST } from "../../../data";
import VideoListitem from "./VideoListitem";
import { colors } from "../../../constants/theme";

const videos = VIDEO_LIST;
export const VideoScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ ...styles.mainContainer, paddingHorizontal: 5 }}
    >
      <FlatList
        data={videos}
        scrollEnabled={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 28 }}
        renderItem={(item, index) => {
          return <VideoListitem item={{ ...item.item }} />;
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.bhagwa,
    marginTop: 20,
    marginBottom: 20,
  },
});
