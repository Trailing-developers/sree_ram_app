import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { KATHA_LIST } from "../../data";
import { colors, spacing } from "../../constants/theme";
import KathaCard from "./KathaCard";
import { useNavigation } from "@react-navigation/native";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { mantraTitleFilter } from "../../helper/filter";
import { useMemo } from "react";

export default function TeachingsScreen() {
  const navigation = useNavigation();
  const search = useNavigationSearch({
    searchBarOptions: { placeholder: "Search Katha Books" },
  });
  const handlePress = (item) => {
    navigation.navigate("KathaContent", { bookId: item.id });
  };

  const filteredKathaBooks = useMemo(() => {
    if (!search) return KATHA_LIST;
    return KATHA_LIST.filter(mantraTitleFilter(search));
  }, [search]);

  return (
      <FlatList
        data={filteredKathaBooks}
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
