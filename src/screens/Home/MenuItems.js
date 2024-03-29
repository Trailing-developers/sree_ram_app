import { StyleSheet, View } from "react-native";
import Card from "./Card";

export default function MenuItems() {
  const handleCardPress = (routeName) => {};

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Card
          title="Trails"
          onPress={() => handleCardPress("Page1")}
          imageUrl={require("../../../assets/menuItemsImages/rampath.jpg")}
        />
        <Card
          title="Darshan"
          onPress={() => handleCardPress("Page2")}
          imageUrl={require("../../../assets/menuItemsImages/Darshan.jpg")}
        />
        <Card
          title="Teachings"
          onPress={() => handleCardPress("Page3")}
          imageUrl={require("../../../assets/menuItemsImages/Teachings.jpg")}
        />
      </View>
      <View style={styles.row}>
        <Card
          title="Danik Pragati"
          onPress={() => handleCardPress("Page4")}
          imageUrl={require("../../../assets/menuItemsImages/UpdatedDainikPragato.jpg")}
        />
        <Card
          title="Hindu Calendar"
          onPress={() => handleCardPress("Page5")}
          imageUrl={require("../../../assets/menuItemsImages/HinduCalender.jpg")}
        />
        <Card
          title="Feedback"
          onPress={() => handleCardPress("Page6")}
          imageUrl={require("../../../assets/menuItemsImages/Screenshot (116).png")}
        />
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
