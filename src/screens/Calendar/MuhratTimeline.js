import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { muhuratTimeFormat } from "../../helper/miscellaneous";

const TimelineItem = ({ time, icon, title, description }) => (
  <View style={styles.timelineItem}>
    <Text style={styles.time}>{time}</Text>
    <Icon name={icon} size={40} style={styles.icon} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const MuhratTimeline = (goodbadtimes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Good & Bad Muhurta</Text>
      <Text style={styles.subHeader}>Decide your day!</Text>
      {Object.entries(goodbadtimes.data).map(([key, value]) => (
        <TimelineItem
          key={key}
          time={`${muhuratTimeFormat(value.starts_at)} - ${muhuratTimeFormat(
            value.ends_at
          )}`}
          icon="account-balance"
          title={value.name}
          description={value.desc}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  descriptionContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});

export default MuhratTimeline;
