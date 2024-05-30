import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import { ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import { SHIVA } from "../../../data";
import { fontSize } from "../../../constants/theme";
import NearByTemples from "../temple_detail_page/NearBytemples";
import { useGodPage } from "../../../hooks/api/page";

// const data = SHIVA;
const GodAndGoddessDetailPage = ({ route }) => {
  const { god } = route.params;
  const { godData, isLoading, error } = useGodPage(god?.godId);
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text style={styles.title}>{godData?.data?.name}</Text>
      <View style={styles.container}>
        <FastImage
          source={{ uri: godData?.data?.image }}
          style={styles.image}
        />
        <Text style={styles.description}>{godData?.data?.description}</Text>
      </View>
      <NearByTemples
        data={godData?.data?.temple}
        title={`Popular ${godData?.data?.name} temple`}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: fontSize.lg,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    marginTop: 10,
    textAlign: "left",
  },
});

export default GodAndGoddessDetailPage;
