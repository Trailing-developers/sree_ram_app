import { StyleSheet, Text, View } from "react-native";
import CardMedia from "../../shared/Card/CardMedia";
import Card from "../../shared/Card/Card";
import CardContent from "../../shared/Card/CardContent";
import { colors, fontSize } from "../../constants/theme";

export const DanikListItem = ({ item }) => {
  return (
    <View key={item.index} style={styles.container}>
      <Card style={{ width: 200, height: 200 }}>
        <CardMedia source={item.item.imageUrl} borderRadius={false} />
        <CardContent style={styles.titleContainer}>
          <Text style={styles.title}>{item.item.title}</Text>
        </CardContent>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  titleContainer: {
    justifyContent: "center",
    backgroundColor: colors.bhagwadark,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  title: {
    fontSize: fontSize.base,
  },
});
