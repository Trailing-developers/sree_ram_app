import { FlatList, Text, View , StyleSheet, Dimensions} from "react-native";
import { colors, fontSize } from "../../constants/theme";
import { DANIK_PRGATI_HOME } from "../../data";
import { DanikListItem } from "./DanikListItem";

export const DanikPragati = () => {
  const gap = Dimensions.get("screen").width * 0.03;
  return (
    <View style={{ flex: 1}}>
      <FlatList
        data={DANIK_PRGATI_HOME}
        contentContainerStyle={[styles.flatlist]}
        numColumns={2}
        renderItem={(item, index) => <DanikListItem item={item} />}
        columnWrapperStyle={{ gap }}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingVertical: Dimensions.get("screen").width * 0.03,
    paddingHorizontal: Dimensions.get("screen").width * 0.03,
    backgroundColor: colors.bhagwa,
    width: Dimensions.get("screen").width,
    flex: 1,
  },
});
