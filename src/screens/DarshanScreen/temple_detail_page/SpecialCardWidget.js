import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const SpecialCardWidget = () => {
  //   return (
  // <View style={styles.container}>
  //   <View style={styles.leftColumn}>
  //     <Image
  //       style={styles.image}
  //       source={{
  //         uri: "https://media.licdn.com/dms/image/D4D12AQFkYwm16BzgFw/article-cover_image-shrink_720_1280/0/1697096762271?e=2147483647&v=beta&t=bink2kb8_yus-UFhedJt9DNBjM-ayxuaV_9Hq0ZiZ8g",
  //       }}
  //     />
  //   </View>
  //   <View style={styles.rightColumn}>
  //     <Text style={styles.title}>Special Event</Text>
  //     <Text style={styles.description}>
  //       Description of the special event details
  //     </Text>
  //   </View>
  // </View>
  //     <View style={styles.container}>
  //       <ScrollView contentContainerStyle={styles.scrollView} horizontal={true}>
  //         {cards.map(renderCard)}
  //       </ScrollView>
  //       {/* Pagination */}
  //       <View style={styles.pagination}>
  //         <Text style={styles.paginationText}>Page 1 of {cards.length}</Text>
  //       </View>
  //     </View>
  //   );
  const [cards, setCards] = useState([
    {
      id: 1,
      imageUri:
        "https://www.trawell.in/admin/images/upload/148027305ISKCONTemple_Main.jpg",
      text: "Text for Card 1",
    },
    {
      id: 2,
      imageUri:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/ISKCON-Temple-Chennai-3.JPG",
      text: "Text for Card 2",
    },
    // Add more card data as needed
  ]);

  const renderCard = (card) => (
    <TouchableOpacity key={card.id} style={styles.card}>
      <Image source={{ uri: card.imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{card.text}</Text>
        <Text style={styles.text}>
          It is situated somewhere It is situated somewhere It is situated
          somewhere It is situated somewhere{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{ margin: 10 }}>This is for testing purpose</Text>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal={true}>
        {cards.map(renderCard)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  scrollView: {
    flexGrow: 1,
    flexDirection: "row",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#FFC470",
  },
  image: {
    width: "40%",
    height: 150,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 16,
    justifyContent: "center",
  },
  pagination: {
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  paginationText: {
    fontSize: 16,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//   },
//   leftColumn: {
//     flex: 1,
//   },
//   rightColumn: {
//     flex: 2,
//   },
//   image: {
//     width: "100%",
//     height: 100,
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 18,
//   },
//   description: {
//     marginTop: 10,
//   },
// });

export default SpecialCardWidget;
