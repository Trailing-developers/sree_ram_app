import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/theme";

export default DisplayMantra = ({ item }) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{item.title}</Text>
      {item.content.map((it, i) => {
        return (
          <Text key={i + it} style={styles.mantra}>
            {it}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.gray,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 30,
    fontWeight: "bold",
  },
  mantra: {
    color: colors.white,
    fontSize: 20,
    lineHeight: 20,
    padding: 30,
  },
});
