import { StyleSheet, View } from "react-native";
import Card from "./Card";
import { useNavigation } from '@react-navigation/native';

export default function MenuItems() {
  const navigation = useNavigation();
  const handleCardPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Card
          title="Trails"
          onPress={() => handleCardPress("CharitraScreen")}
          imageUrl={require("../../../assets/menuItemsImages/rampath.jpg")}
        />
        <Card
          title="Darshan"
          onPress={() => handleCardPress("DarshanScreen")}
          
          imageUrl={require("../../../assets/menuItemsImages/Darshan.jpg")}
        />
        <Card
          title="Teachings"
          onPress={() => handleCardPress("TeachingsScreen")}
          imageUrl={require("../../../assets/menuItemsImages/Teachings.jpg")}
        />
      </View>
      <View style={styles.row}>
        <Card
          title="Danik Pragati"
          onPress={() => handleCardPress("CharitraScreen")}
          imageUrl={require("../../../assets/menuItemsImages/UpdatedDainikPragato.jpg")}
        />
        <Card
          title="Hindu Calendar"
          onPress={() => handleCardPress("CharitraScreen")}
          imageUrl={require("../../../assets/menuItemsImages/HinduCalender.jpg")}
        />
        <Card
          title="Feedback"
          onPress={() => handleCardPress("CharitraScreen")}
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
