import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Pdf from "react-native-pdf";
import { colors } from "../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";

const BookKathaContent = ({ route }) => {
  const { bookId, pdfLink } = route.params;
  console.log(pdfLink);
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
        <TouchableOpacity>
          <Icon name="music" size={50} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="youtube" size={50} color={colors.black} />
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
    flex: 0.9,
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
