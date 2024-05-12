import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { MANTRA_LIST } from "../../data";
import { MantraListItem } from "./MantraListItem";
import { mantraTitleFilter } from "../../helper/filter";
import { useMemo } from "react";
import { itemDivider } from "../../constants/theme";

export const MantraPage = () => {
  const search = useNavigationSearch({
    searchBarOptions: { placeholder: "Search Mantras" },
  });

  const ItemDivider = () => {
    return (
      <View
        style={{
          ...itemDivider.itemSeperator,
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

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ ...styles.mainContainer, paddingHorizontal: 20 }}
    >
      <FlatList
        data={filteredMantras}
        ItemSeparatorComponent={ItemDivider}
        renderItem={(item, index) => <MantraListItem item={item} />}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
