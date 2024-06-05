import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomCalendar = () => {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Text style={styles.day}>WED</Text>
          <Text style={styles.date}>17</Text>
          <Text style={styles.month}>Apr</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="share" size={24} color="#fff" style={styles.icon} />
          <Icon name="bell" size={24} color="#fff" style={styles.icon} />
        </View>
      </View>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysDorhF7fdv_XALx4wUYEuco09TBygrYpvQ&s",
        }}
        style={styles.image}
      />
      <View style={styles.avatarContainer}>
        <Avatar.Image
          size={40}
          source={{ uri: "https://your-avatar-url.com/avatar.jpg" }}
        />
      </View>
      <Card.Content>
        <Text style={styles.title}>Ram Navami</Text>
        <Text style={styles.subtitle}>Shukla Paksha, Chaitra Masa</Text>
        <Text style={styles.description}>
          Celebrating the birth of Lord Rama with devotion and reverence.
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#FF6347",
  },
  dateContainer: {
    alignItems: "center",
  },
  day: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  month: {
    color: "#fff",
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 10,
  },
  image: {
    height: 150,
    width: "100%",
  },
  avatarContainer: {
    position: "absolute",
    top: 120,
    right: 20,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default CustomCalendar;
