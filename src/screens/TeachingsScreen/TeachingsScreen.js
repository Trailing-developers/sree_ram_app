import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { KATHA_LIST } from "../../data";
import { colors, spacing } from "../../constants/theme";
import KathaCard from "./KathaCard";
import { useNavigation } from "@react-navigation/native";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../searchBarAdd/SearchBar";
import { useKathaList } from "../../hooks/api/page";

export default function TeachingsScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const navigation = useNavigation();
  // const search = useNavigationSearch({
  //   searchBarOptions: { placeholder: "Search Katha Books" },
  // });
  const { kathaData, isLoading, error } = useKathaList();

  const handlePress = (item) => {
    navigation.navigate("KathaContent", { bookId: item.id });
  };

  const filteredKathaBooks = useMemo(() => {
    if (!searchPhrase.trim()) {
      return kathaData;
    } else {
      const normalizedSearchPhrase = searchPhrase.trim().toLowerCase();
      return kathaData?.filter((item) =>
        item.title.toLowerCase().includes(normalizedSearchPhrase)
      );
    }
  }, [searchPhrase, kathaData]);

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
    <SafeAreaView style={{ flex: 1 }}>
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
