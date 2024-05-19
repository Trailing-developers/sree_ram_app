import {
  ActivityIndicator,
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigationSearch } from "../../hooks/useNavigationSearch";
import { MantraListItem } from "./MantraListItem";
import { mantraTitleFilter } from "../../helper/filter";
import { useMemo, useRef, useState } from "react";
import { colors } from "../../constants/theme";
import { FlatList } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import DisplayMantra from "./DisplayMantra";
import { useMantras } from "../../hooks/api/mantra";

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

  const { mantras, isLoading, error } = useMantras();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ActivityIndicator />
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

  const filteredMantras = useMemo(() => {
    if (!search) return mantras;
    return mantras.filter(mantraTitleFilter(search));
  }, [search]);

  const scrollY = useRef(new Animated.Value(0)).current;

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);

  const [matra, setMantra] = useState();

  const openModal = (item) => {
    setMantra(item);
    bottomSheetModalRef.current.present();
  };

  return (
    // <ScrollView
    //   contentInsetAdjustmentBehavior="automatic"
    //   style={{ ...styles.mainContainer, paddingHorizontal: 20 }}
    // >
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={filteredMantras}
          ItemSeparatorComponent={ItemDivider}
          contentContainerStyle={{
            marginTop: 10,
            marginBottom: 10,
          }}
          renderItem={(item, index) => (
            <MantraListItem item={item} onPress={() => openModal(item)} />
          )}
        />
        {/* </ScrollView> */}
      </SafeAreaView>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        <DisplayMantra {...matra} />
      </BottomSheetModal>
    </BottomSheetModalProvider>
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
