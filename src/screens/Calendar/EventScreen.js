import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Button, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const EventCard = ({ date, month, title, duration, location }) => (
  <Card style={styles.card}>
    <Card.Content>
      <View style={styles.cardHeader}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.monthText}>{month}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="bookmark-outline" size={24} color="white" />
          <Icon
            name="share-variant"
            size={24}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Icon name="calendar" size={20} color="white" />
          <Text style={styles.detailText}>{duration}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="map-marker" size={20} color="white" />
          <Text style={styles.detailText}>{location}</Text>
        </View>
      </View>
    </Card.Content>
  </Card>
);

const EventsScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Events</Text>
      <Avatar.Image
        size={40}
        source={{ uri: "https://example.com/avatar.jpg" }}
      />
    </View>
    <Text style={styles.sectionTitle}>Popular</Text>
    <EventCard
      date="14"
      month="March"
      title="Front UX & Product Management Case Study Conference"
      duration="March 14 - March 18"
      location="USA"
    />
    <Text style={styles.sectionTitle}>New Events</Text>
    <EventCard
      date="21"
      month="March"
      title="UX/UI and Design Thinking Conferences"
      duration="March 21 - March 24"
      location="Canada"
    />
    <EventCard
      date="3"
      month="April"
      title="The 4th Annual DesignOps Global"
      duration="April 3 - April 5"
      location="Canada"
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 32,
    color: "#8DC63F",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginVertical: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: "#8DC63F",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateContainer: {
    alignItems: "center",
  },
  dateText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  monthText: {
    fontSize: 16,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginTop: 8,
  },
  detailsContainer: {
    marginTop: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  detailText: {
    marginLeft: 8,
    color: "white",
  },
});

export default EventsScreen;
