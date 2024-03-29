import { StyleSheet, View } from "react-native";
import Card from "./Card";

export default function MenuItems() {
  const handleCardPress = (routeName) => {};

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Card title="Trails" onPress={() => handleCardPress("Page1")} />
        <Card title="Darshan" onPress={() => handleCardPress("Page2")} />
        <Card title="Teachings" onPress={() => handleCardPress("Page3")} />
      </View>
      <View style={styles.row}>
        <Card title="Danik Pragati" onPress={() => handleCardPress("Page4")} />
        <Card title="Hindu Calendar" onPress={() => handleCardPress("Page5")} />
        <Card title="Feedback" onPress={() => handleCardPress("Page6")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
