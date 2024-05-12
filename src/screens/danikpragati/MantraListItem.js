import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { fontSize } from "../../constants/theme";

export const MantraListItem = ({ item }) => {
  return (
    <View key={item.item.index} style={styles.item}>
      <FastImage
        style={styles.image}
        source={{ uri: item.item.image }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.wrapText}>
        <Text style={{ fontSize: fontSize.base }}>{item.item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    padding: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  wrapText: { flex: 1, marginLeft: 10, justifyContent: "center" },
});
