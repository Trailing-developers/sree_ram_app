import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GodWorshippedPage = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gods and Goddesses Worshipped</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((god, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("GodDetails", {
                  image: god.image,
                  name: god.name,
                });
              }}
            >
              <Image source={{ uri: god.image }} style={styles.image} />
            </TouchableOpacity>
          );
        })}
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

const data = [
  { image: 'image_url_1', name: 'God 1' },
  { image: 'image_url_2', name: 'God 2' },
  { image: 'image_url_3', name: 'God 3' },
  { image: 'image_url_4', name: 'God 4' },
];



export default GodWorshippedPage;
