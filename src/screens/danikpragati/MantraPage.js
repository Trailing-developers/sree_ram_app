import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { MANTRA_LIST } from "../../data";
import { MantraListItem } from "./MantraListItem";
import { mantraTitleFilter } from "../../helper/filter";
import { useMemo, useRef } from "react";
import { colors, itemDivider } from "../../constants/theme";
import { FlatList } from "react-native-gesture-handler";

export const MantraPage = () => {
  const search = useNavigationSearch({
    searchBarOptions: { placeholder: "Search Mantras" },
  });

  const ItemDivider = () => {
    return (
      <View
        style={{
          marginVertical: 9,
          marginLeft: 60,
        }}
      />
    );
  };

  const filteredMantras = useMemo(() => {
    if (!search) return MANTRA_LIST;
    return MANTRA_LIST.filter(mantraTitleFilter(search));
  }, [search]);

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    // <ScrollView
    //   contentInsetAdjustmentBehavior="automatic"
    //   style={{ ...styles.mainContainer, paddingHorizontal: 20 }}
    // >
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={filteredMantras}
        ItemSeparatorComponent={ItemDivider}
        contentContainerStyle={{
          marginTop: 10,
          marginBottom: 10,
        }}
        renderItem={(item, index) => <MantraListItem item={item} />}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.bhagwa,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
