import { ScrollView, Image, StyleSheet, View, Text } from "react-native";

const GodWorshippedPage = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gods and Goddesses Worshipped</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((god, index) => (
          <Image key={index} source={{ uri: god.image }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    marginLeft: 10,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default GodWorshippedPage;
