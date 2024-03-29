import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const imageUrl =
  "https://www.rmg.co.uk/sites/default/files/styles/full_width_1440/public/2021-12/Lanterns%20photographycourse%20unsplash.jpg?itok=sfpVCasg";

export default function CalenderWidget() {
  const onPress = () => {
    // Handle banner press event
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200, // Adjust height as per your requirement
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    padding: 5,
    // Add styles for your home page container
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
