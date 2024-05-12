import { Text, View } from "react-native";

export const MantraListItem = ({ item }) => {
  return (
    <View key={item.item.index}>
      <Text>{item.item.title}</Text>
    </View>
  );
};
