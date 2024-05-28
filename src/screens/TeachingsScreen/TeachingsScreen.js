import { Dimensions, FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { KATHA_LIST } from "../../data";
import { colors, spacing } from "../../constants/theme";
import KathaCard from "./KathaCard";
import { useNavigation } from "@react-navigation/native";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { mantraTitleFilter } from "../../helper/filter";
import { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../searchBarAdd/SearchBar";


export default function TeachingsScreen() {
  
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const navigation = useNavigation();
  // const search = useNavigationSearch({
  //   searchBarOptions: { placeholder: "Search Katha Books" },
  // });
  const handlePress = (item) => {
    navigation.navigate("KathaContent", { bookId: item.id });
  };


  const filteredKathaBooks = useMemo(() => {
    if (!searchPhrase.trim()) {
      return KATHA_LIST;
    } else {
      const normalizedSearchPhrase = searchPhrase.trim().toLowerCase();
      return KATHA_LIST.filter(
        (item) =>
          item.title.toLowerCase().includes(normalizedSearchPhrase)
      );
    }
  }, [searchPhrase]);

  return (
      <SafeAreaView style= {{flex: 1}}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
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
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContent: {
    justifyContent: "center",
    backgroundColor: colors.bhagwadark,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 15,
    textAlign: "center",
  },
});
