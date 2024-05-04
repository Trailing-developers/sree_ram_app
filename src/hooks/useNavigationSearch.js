import { useLayoutEffect, useState } from "react";
import { colors } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const defaultSearchOptions = {
  tintColor: colors.primary,
  hideWhenScrolling: false,
};

export const useNavigationSearch = ({ searchBarOptions }) => {
  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptions,
        ...searchBarOptions,
        onChangeText: onChangeSearch,
      },
    });
  }, [navigation, searchBarOptions]);

  const onChangeSearch = (query) => {
    setSearch(query);
  };

  return search;
};
