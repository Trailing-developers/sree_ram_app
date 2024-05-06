import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Pdf from "react-native-pdf";
import { colors } from "../../constants/theme";
// import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

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
        <Text>Book Katha Content for {bookId}</Text>
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          fitWidth={true}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          spacing={30}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={[styles.pdf, { backgroundColor: colors.bhagwa }]}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AudioPlayer");
          }}
          style={{ paddingBottom: 30 }}
        >
          <FontAwesome6 name="music" size={30} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 30 }}>
          <FontAwesome6 name="youtube" size={30} color={colors.black} />
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
    // position: "absolute",
    // top: 20,
    // left: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.8,
    zIndex: 10,
  },
});

export default BookKathaContent;
