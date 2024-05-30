import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import FastImage from "react-native-fast-image";

const GodWorshippedPage = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gods and Goddesses Worshipped</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.map((god, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate("GodDetails", { god: god });
              }}
            >
              <FastImage
                source={{ uri: god?.god?.image }}
                style={styles.image}
              />
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

export default GodWorshippedPage;
