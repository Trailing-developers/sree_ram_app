import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { KATHA_LIST } from "../../data";
import { colors, spacing } from "../../constants/theme";
import KathaCard from "./KathaCard";
import { useNavigation } from "@react-navigation/native";

export default function TeachingsScreen() {
  const navigation = useNavigation();
  const handlePress = (item) => {
    navigation.navigate("KathaContent", { bookId: item.id });
  };
  return (
    <FlatList
      data={KATHA_LIST}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={{
        paddingVertical: spacing.l,
        paddingHorizontal: spacing.s,
        backgroundColor: colors.bhagwa,
        flex: 1,
      }}
      renderItem={({ item }) => <KathaCard item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContent: {
    justifyContent: "center",
    backgroundColor: colors.bhagwadark,
  },
  cardText: {
    fontSize: 15,
    textAlign: "center",
  },
});
