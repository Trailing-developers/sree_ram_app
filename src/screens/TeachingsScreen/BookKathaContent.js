import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../constants/theme";
// import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Katha_content } from "../../data";
import { Line } from "react-native-svg";

const BookKathaContent = ({ route }) => {
  const { bookId, pdfLink } = route.params;
  const navigation = useNavigation();
  const source = {
    uri: pdfLink,
    cache: true,
  };
  console.log(bookId);
  return (
    <View style={styles.container}>
      <View style={styles.pdfContainer}>
        <Text style={styles.titlestyle}>{Katha_content.title}</Text>
        {Katha_content.body.map(line=><Text>{line}</Text>)}
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AudioPlayer");
          }}
          style={{ paddingBottom: 30 }}
        >
          <FontAwesome5 name="music" size={30} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate("VideoScreen")}
        >
          <FontAwesome5 name="youtube" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 0.95,
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    left: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.8,
    zIndex: 10,
  },
  titlestyle: {
    fontSize: 35,
  }
});

export default BookKathaContent;
