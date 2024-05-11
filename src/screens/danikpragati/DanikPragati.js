import { FlatList, Text, View } from "react-native";
import { colors, fontSize } from "../../constants/theme";
import { DANIK_PRGATI_HOME } from "../../data";
import { DanikListItem } from "./DanikListItem";

export const DanikPragati = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={DANIK_PRGATI_HOME}
        contentContainerStyle={{ flex: 1, backgroundColor: colors.bhagwa }}
        numColumns={2}
        renderItem={(item, index) => <DanikListItem item={item} />}
        scrollEnabled={false}
      />
    </View>
  );
};
