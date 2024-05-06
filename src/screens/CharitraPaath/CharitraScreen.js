import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../Home/Card";
import { useNavigation } from "@react-navigation/native";

export default function CharitraScreen() {
  const navigation = useNavigation();
  const handleCardPress = (routeName) => {
    navigation.navigate(routeName);
  };

  const chunkArray = (arr, chunkSize) => {
    return Array(Math.ceil(arr.length / chunkSize))
      .fill()
      .map((_, index) => index * chunkSize)
      .map((start) => arr.slice(start, start + chunkSize));
  };
  const chunkedData = chunkArray(data, 2);
  return (
    <View style={styles.container}>
      {chunkedData.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((item) => (
            <Card
              key={item.title + "_" + index}
              title={item.title}
              onPress={() => handleCardPress(item.link)}
              imageUrl={item.imageUrl}
            />
          ))}
        </View>
      ))}
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

const data = [
  {
    title: "Shree Ram",
    imageUrl: require("../../../assets/GodImages/ShreeRam.jpg"),
    link: "TrailScreen",
  },
  {
    title: "Sita Maa",
    imageUrl: require("../../../assets/GodImages/SitaMaa.jpg"),
    link: "Page2",
  },
  {
    title: "Shree Lakshman",
    imageUrl: require("../../../assets/GodImages/LakshmanJi.jpg"),
    link: "Page3",
  },
  {
    title: "Hanuman Ji",
    imageUrl: require("../../../assets/GodImages/Hanuman.jpg"),
    link: "Page4",
  },
  {
    title: "Shree Raja Dasratha",
    imageUrl: require("../../../assets/GodImages/RajaDasrath.jpg"),
    link: "Page5",
  },
  {
    title: "Sugriva",
    imageUrl: require("../../../assets/GodImages/Sugriva.png"),
    link: "Page6",
  },
];
