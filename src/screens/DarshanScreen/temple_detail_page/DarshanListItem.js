import { StyleSheet, Text, View } from "react-native";
import Card from "../../../shared/Card/Card";
import CardContent from "../../../shared/Card/CardContent";

export const DarshanListItem = ({ item }) => {
  return (
    <Card key={item.index} style={styles.textBackground}>
      <CardContent>
        <Text>{item.item?.typeName}</Text>
        <Text>{item.item?.amount}</Text>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 40,
    width: 100,
  },
  textBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // White background with 50% opacity
    // backgroundColor: "lightblue", // White background with 50% opacity
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    maxWidth: "30%",
    height: 100,
    margin: 20,
  },
});
