import {
  ActivityIndicator,
  Animated,
  Dimensions,
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
import { Entypo } from "@expo/vector-icons";
import { BlurView } from "@react-native-community/blur";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import DisplayMantra from "./DisplayMantra";
import { useMantras } from "../../hooks/api/mantra";
import MantraPageOverlay from "./MantraPageOverlay";

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

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (item) => {
    setMantra(item);
    setIsVisible(true);
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
      <View style={styles.mainContainer}>
        {!isVisible && <View>
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
              <MantraListItem item={item} onPress={() => handleClick(item)} />
            )}
          />
          </View>}
          {isVisible && (
            <View style = {{flex: 1}}>
              <BlurView blurType="light" blurAmount={45} style={styles.absolute} />
              <View >
              <MantraPageOverlay item={{...matra}} />
              <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
              />
              <Entypo
                name="cross"
                size={35}
                color="black"
                style={[styles.iconstyle]}
                onPress={() => {
                setIsVisible(false);
                }}
              />
            </View>
          </View>
          )}
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bhagwa,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconstyle:{
    height: 38,
    width: 38,
    borderRadius: 100,
    padding: 1.3,
    backgroundColor: colors.white,
    borderColor: colors.bhagwa,
    borderWidth: 2,
    top: Dimensions.get("screen").height * 0.7,
    left: Dimensions.get("screen").width * 0.45,
  },
  absolute: {
    position: 'absolute',
    backgroundColor: "rgba(255,196,112,0.1)",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
