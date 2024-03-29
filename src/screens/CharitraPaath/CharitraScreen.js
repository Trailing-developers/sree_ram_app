import { StyleSheet, View } from "react-native";
import Card from "../Home/Card";

export default function CharitraScreen() {
  const handleCardPress = (routeName) => {};

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Card
          title="Shree Ram"
          imageUrl={require("../../../assets/GodImages/ShreeRam.jpg")}
          onPress={() => handleCardPress("Page1")}
        />
        <Card
          title="Sita Maa"
          onPress={() => handleCardPress("Page2")}
          imageUrl={require("../../../assets/GodImages/SitaMaa.jpg")}
        />
        <Card
          title="Shree Lakshman"
          onPress={() => handleCardPress("Page3")}
          imageUrl={require("../../../assets/GodImages/LakshmanJi.jpg")}
        />
      </View>
      <View style={styles.row}>
        <Card
          title="Hanuman Ji"
          onPress={() => handleCardPress("Page4")}
          imageUrl={require("../../../assets/GodImages/Hanuman.jpg")}
        />
        <Card
          title="Shree Raja Dasratha"
          onPress={() => handleCardPress("Page5")}
          imageUrl={require("../../../assets/GodImages/RajaDasrath.jpg")}
        />
        <Card
          title="Sugriva"
          onPress={() => handleCardPress("Page6")}
          imageUrl={require("../../../assets/GodImages/Sugriva.png")}
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