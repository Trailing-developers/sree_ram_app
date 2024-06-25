import moment from "moment";
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import FastImage from "react-native-fast-image";
import { Card, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const width = Dimensions.get("screen").width * 0.95;

const CustomCalendar = ({ selectedDate, data }) => {
  const dayOfTheWeek = moment(selectedDate).format("ddd").toUpperCase();
  const day = moment(selectedDate).format("D");
  const month = moment(selectedDate).format("MMM").toUpperCase();

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Text style={styles.day}>{dayOfTheWeek}</Text>
          <Text style={styles.date}>{day}</Text>
          <Text style={styles.month}>{month}</Text>
        </View>
      </View>
      {data && (
        <>
          <FastImage
            source={{
              uri: data?.image,
            }}
            style={styles.image}
          />
          <Card.Content>
            <Text style={styles.title}>{data?.name}</Text>
            {/* {data?.location && (
              <Text
                style={styles.subtitle}
              >{`${data?.location?.address1},${data?.location?.city},${data?.location?.state}`}</Text>
            )} */}
            {/* <Text style={styles.subtitle}>Shukla Paksha, Chaitra Masa</Text> */}
            <Text style={styles.description}>{data?.description}</Text>
          </Card.Content>
        </>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    width: width,
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
    lineHeight: 24,
  },
});

export default CustomCalendar;
