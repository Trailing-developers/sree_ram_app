import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  

  
} from "react-native";
import { useHomeWidgets } from "../../hooks/api/widgets";
import { useMemo } from "react";
import {Text} from "react-native";

const imageUrl =
  "https://d.newsweek.com/en/full/1978216/dragon-dance-chinese-new-year.jpg";

export default function CalenderWidget() {
  const { data, isLoading, error } = useHomeWidgets();
  const onPress = () => {
    // Handle banner press event
  };

  const calenderBanner = useMemo(() => {
    if (!data) return [];
    return data?.data?.filter((item) => item?.type === "CALENDAR_BANNER")[0]
      .data[0];
  }, [data]);

  // if (error) return <Text>Something went wrong.</Text>;

  if (isLoading)
    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: calenderBanner?.imgUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200, // Adjust height as per your requirement
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    padding: 5,
    // Add styles for your home page container
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
