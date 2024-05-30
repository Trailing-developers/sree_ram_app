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
import SearchBar from "../../searchBarAdd/SearchBar";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import DisplayMantra from "./DisplayMantra";
import { useMantras } from "../../hooks/api/mantra";

export const MantraPage = () => {
  const [matra, setMantra] = useState();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  // const search = useNavigationSearch({
  //   searchBarOptions: { placeholder: "Search Mantras" },
  // });

  const { mantras, isLoading, error } = useMantras();

  const filteredMantras = useMemo(() => {
    if (!searchPhrase.trim()) {
      return mantras;
    } else {
      const normalizedSearchPhrase = searchPhrase.trim().toLowerCase();
      return mantras.filter((item) =>
        item.title.toLowerCase().includes(normalizedSearchPhrase)
      );
    }
  }, [searchPhrase, mantras]);

  const scrollY = useRef(new Animated.Value(0)).current;

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

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);

  const openModal = (item) => {
    setMantra(item);
    bottomSheetModalRef.current.present();
  };

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

  return (
    // <ScrollView
    //   contentInsetAdjustmentBehavior="automatic"
    //   style={{ ...styles.mainContainer, paddingHorizontal: 20 }}
    // >
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.mainContainer}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        <FlatList
          data={filteredMantras}
          ItemSeparatorComponent={ItemDivider}
          contentContainerStyle={{
            marginTop: 10,
            marginBottom: 10,
            paddingHorizontal: 10,
            paddingBottom: 100,
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
