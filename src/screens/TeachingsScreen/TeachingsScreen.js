import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../../shared/Card/Card";
import { KATHA_LIST } from "../../data";
import CardMedia from "../../shared/Card/CardMedia";
import CardContent from "../../shared/Card/CardContent";
import { colors, spacing } from "../../constants/theme";

export default function TeachingsScreen() {
  const navigation = useNavigation();

  const handleCardPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <FlatList
      data={KATHA_LIST}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={{
        paddingVertical: spacing.l,
        paddingHorizontal: spacing.s,
        backgroundColor: colors.bhagwa,
        flex: 1,
      }}
      renderItem={({ item }) => (
        <Card
          key={item.id}
          style={{
            marginLeft: spacing.s,
            marginBottom: spacing.l,
          }}
        >
          <CardMedia source={item.image} />
          <CardContent style={styles.cardContent}>
            <Text style={styles.cardText}>{item.title}</Text>
          </CardContent>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContent: {
    justifyContent: "center",
    backgroundColor: colors.bhagwadark,
  },
  cardText: {
    fontSize: 15,
    textAlign: "center",
  },
});
