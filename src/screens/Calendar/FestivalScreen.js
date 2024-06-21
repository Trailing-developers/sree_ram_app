import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"; // Using Expo for icons
import { colors } from "../../constants/theme";
import { useFullCalendarView } from "../../hooks/api/event";

const FestivalScreen = ({ route }) => {
  const { year, month } = route.params;
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  const { calendarData, isLoading, error } = useFullCalendarView(year, month);
  console.log(calendarData);
  // const dates = [
  //   // Populate this array with your dates and event icons
  //   { date: 1, event: "ekadashi" },
  //   { date: 2, event: "none" },
  //   { date: 3, event: "pradosha" },
  //   { date: 4, event: "amavasya" },
  //   { date: 5, event: "festival" },
  //   { date: 6, event: "festival" },
  //   { date: 7, event: "none" },
  //   { date: 8, event: "none" },
  //   { date: 9, event: "none" },
  //   { date: 10, event: "none" },
  //   { date: 11, event: "none" },
  //   { date: 12, event: "none" },
  //   { date: 13, event: "none" },
  //   { date: 14, event: "festival" },
  //   { date: 15, event: "festival" },
  //   { date: 16, event: "none" },
  //   { date: 17, event: "none" },
  //   { date: 18, event: "pradosha" },
  //   { date: 19, event: "none" },
  //   { date: 20, event: "pournami" },
  //   { date: 21, event: "festival" },
  //   { date: 22, event: "pournami" },
  //   { date: 23, event: "none" },
  //   { date: 24, event: "none" },
  //   { date: 25, event: "none" },
  //   { date: 26, event: "none" },
  //   { date: 27, event: "none" },
  //   { date: 28, event: "none" },
  //   { date: 29, event: "none" },
  //   { date: 30, event: "sankranti" },
  // ];

  const eventsLegend = [
    { event: "Sankranti", icon: "sun-o" },
    { event: "Festival", icon: "fire" },
    { event: "Amavasya", icon: "moon-o" },
    { event: "Pournami", icon: "circle-o" },
    { event: "Eclipse", icon: "asterisk" },
    { event: "Pradosha", icon: "bolt" },
    { event: "Sankashti Chaturthi", icon: "certificate" },
    { event: "Shasti", icon: "leaf" },
    { event: "Ekadashi", icon: "star" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>June 2024</Text>
        <TouchableOpacity>
          <MaterialIcons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.weekRow}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.calendarContainer}>
        {calendarData.map((item, index) => (
          <View key={index} style={styles.dateContainer}>
            <Text
              style={[
                styles.dateText,
                item.event === "festival" && styles.highlightedDate,
              ]}
            >
              {item.date}
            </Text>
            {item.event !== "none" && (
              <FontAwesome
                name={getEventIcon(item.event)}
                size={16}
                color="#9c2b2b"
              />
            )}
          </View>
        ))}
      </View>
      <View style={styles.legend}>
        {eventsLegend.map((event, index) => (
          <View key={index} style={styles.legendItem}>
            <FontAwesome name={event.icon} size={16} color="orange" />
            <Text style={styles.legendText}>{event.event}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const getEventIcon = (event) => {
  switch (event) {
    case "festival":
      return "fire";
    case "pradosha":
      return "bolt";
    case "amavasya":
      return "moon-o";
    case "pournami":
      return "circle-o";
    case "sankranti":
      return "sun-o";
    case "eclipse":
      return "asterisk";
    case "shasti":
      return "leaf";
    case "ekadashi":
      return "star";
    case "sankashti chaturthi":
      return "certificate";
    // Add more cases for other events
    default:
      return "circle-o";
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.bhagwa,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  weekDay: {
    fontSize: 16,
    fontWeight: "bold",
  },
  calendarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dateContainer: {
    width: "14.28%", // Ensure each date takes 1/7th of the width
    alignItems: "center",
    paddingVertical: 16,
  },
  dateText: {
    fontSize: 16,
  },
  highlightedDate: {
    backgroundColor: "#9c2b2b",
    borderRadius: 16,
    padding: 4,
    color: "white",
  },
  legend: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 16,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  legendText: {
    marginLeft: 4,
    fontSize: 14,
  },
});

export default FestivalScreen;
