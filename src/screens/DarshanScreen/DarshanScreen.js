import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TempleCarousel from "./TempleCarousel";
import ParsadAndOther from "./ParsadAndOther";
import HotelsAndRestaurantCarousel from "./HotelsAndRestaurantCarousel";
import { useDarshanWidgets } from "../../hooks/api/widgets";
import { useMemo } from "react";

//TODO add spacing between each widget here and pass to the children
export default function DarshanScreen() {
  const { data, isLoading, error } = useDarshanWidgets();

  const darshanWidget = useMemo(() => {
    if (!data) return [];
    return data?.data.filter((item) => item?.type === "WIDGETS")[0].data;
  }, [data]);

  if (error) return <Text>Something went wrong.</Text>;

  if (isLoading)
    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <ScrollView>
      <TempleCarousel />
      <FlatList
        data={darshanWidget}
        scrollEnabled={false}
        renderItem={({ item, index }) => (
          <ParsadAndOther key={index} d={item} />
        )}
      />
    </ScrollView>
  );
}
