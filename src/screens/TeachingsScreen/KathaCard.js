import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, spacing } from "../../constants/theme";
import Card from "../../shared/Card/Card";
import CardMedia from "../../shared/Card/CardMedia";
import CardContent from "../../shared/Card/CardContent";
import { useNavigation } from "@react-navigation/native";

const KathaCard = ({ item }) => {
  const navigate = useNavigation();
  const handlePress = () => {
    navigate.navigate("KathaContent", {
      bookId: item.id,
    });
  };

  return (
    <Card
      key={item.id}
      style={{
        marginLeft: spacing.s,
        marginBottom: spacing.l,
      }}
      onPress={handlePress}
    >
      <CardMedia source={item.image} />

      <CardContent style={styles.cardContent}>
        <Text style={styles.cardText}>{item.title}</Text>
      </CardContent>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    justifyContent: "center",
    backgroundColor: colors.bhagwadark,
    // borderRadius: 10,
  },
  cardText: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default KathaCard;
