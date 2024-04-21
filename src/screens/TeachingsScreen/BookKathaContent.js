import React from "react";
import { View, Text } from "react-native";

const BookKathaContent = ({ route }) => {
  const { bookId } = route.params;
  console.log(bookId);
  return (
    <View>
      <Text>Book Katha Content for {bookId}</Text>
    </View>
  );
};

export default BookKathaContent;
