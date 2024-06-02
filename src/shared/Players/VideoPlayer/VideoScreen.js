import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { VIDEO_LIST } from "../../../data";
import VideoListitem from "./VideoListitem";
import { colors } from "../../../constants/theme";
import { useKathaMedia } from "../../../hooks/api/page";

const videos = VIDEO_LIST;
export const VideoScreen = ({ route }) => {
  const { id } = route.params;
  const { kathaMediaData, isLoading, error } = useKathaMedia(id);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text>Failed to fetch the data. Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ ...styles.mainContainer, paddingHorizontal: 5 }}
    >
      <FlatList
        data={kathaMediaData?.data}
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
