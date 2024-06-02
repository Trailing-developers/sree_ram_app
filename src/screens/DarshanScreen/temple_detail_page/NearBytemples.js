import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Carousel from "../../../shared/Carousel";
import Card from "../../../shared/Card/Card";
import CardMedia from "../../../shared/Card/CardMedia";
import CardContent from "../../../shared/Card/CardContent";
import { sizes } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NearByTemples = ({ data, title }) => {
  const navigation = useNavigation();
  const handleCardPress = (item) => {
    navigation.navigate("TempleDetailPage", { item: { pageId: item.id } });
  };
  return (
    <View style={{ marginVertical: 20 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 10,
        }}
      >
        {title}
      </Text>
      <Carousel
        items={data}
        keyExtractor={(item) => item.templeId}
        renderItems={({ item, style }) => {
          return (
            <TouchableOpacity
              key={item.templeId}
              onPress={() => handleCardPress(item?.temple)}
            >
              <Card
                key={item.title + "_" + item.id}
                style={[styles.card, style]}
              >
                <CardMedia source={item.temple.image} />
                <CardContent style={styles.container}>
                  <View style={styles.textBox}>
                    <Text style={styles.title}>{item.temple.name}</Text>
                  </View>
                  <View style={styles.distanceBox}>
                    <Text style={styles.title}>5 KM</Text>
                  </View>
                </CardContent>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    elevation: 10,
  },
  container: {
    height: 50,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: sizes.body,
    fontWeight: "bold",
  },
});

export default NearByTemples;
