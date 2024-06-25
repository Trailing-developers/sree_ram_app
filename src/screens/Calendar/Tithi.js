import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../constants/theme";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useCalendarEvents } from "../../hooks/api/event";
import CustomCalendar from "./CustomCalendar";
import { Card, Text, Button, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import SunAndMoonRise from "./SunAndMoonRise";
import { convertTo12HourFormat } from "../../helper/miscellaneous";
import FullCalendar from "./FullCalendar";
import MuhratTimeline from "./MuhratTimeline";
import { useEffect, useState } from "react";
import moment from "moment";

export const Tithi = () => {
  const [date, setDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());

  useEffect(() => {
    setEndDate(moment(date));
  }, [date]);

  const { events, isLoading, error } =
    date &&
    useCalendarEvents(
      date?.format("YYYY-MM-DD 00:00:00"),
      endDate?.format("YYYY-MM-DD 23:59:59")
    );

  if (error) return <Text>Something went wrong.</Text>;

  if (isLoading)
    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <ScrollView>
      <FullCalendar date={date} setDate={setDate} />
      <FlatList
        data={events.data.events}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CustomCalendar data={item} selectedDate={date} />
        )}
      />

      <Card style={styles.card}>
        <ImageBackground
          source={{
            uri: "https://blog.cosmicinsights.net/wp-content/uploads/2018/08/IMG_1680.png",
          }}
        >
          <Card.Title
            title="Tithi"
            titleStyle={{ color: "white", fontSize: 25 }}
            right={() => <Text style={styles.linkText}>?</Text>}
          />
          <Card.Content>
            <View style={styles.row}>
              <Text style={styles.largeText}>
                {events?.data?.tithi?.paksha} {events?.data?.tithi?.name}
              </Text>
              {/* <Text style={styles.largeText}>Amavasya</Text> */}
            </View>
            <View style={styles.row}>
              <Text style={styles.smallText}>
                upto{" "}
                {convertTo12HourFormat(
                  events?.data?.tithi?.completes_at.split(" ")[1]
                )}{" "}
                today
              </Text>
              {/* <Text style={styles.smallText}>upto 05:42 pm on 6th</Text> */}
            </View>
          </Card.Content>
        </ImageBackground>
      </Card>

      <SunAndMoonRise data={events.data} />
      <MuhratTimeline data={events?.data?.goodbadtimes} />

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.mediumText}>Wednesday Prayer</Text>
          <Text style={styles.smallText}>7m</Text>
          <Button
            mode="contained"
            onPress={() => console.log("Start Prarthana")}
          >
            START PRARTHANA
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bhagwa,
    borderRadius: 20,
    height: 150,
    marginBottom: 20,
  },
  festivalContainer: {
    backgroundColor: colors.bhagwa,
    borderRadius: 20,
    height: 150,
    marginBottom: 20,
  },
  normalContainer: {
    backgroundColor: colors.gray,
    borderRadius: 20,
    height: 250,
    marginBottom: 20,
  },
  someOtherContainer: {
    padding: 20,
    margin: 20,
    backgroundColor: "#cbdb95",
    borderRadius: 20,
  },
  header: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
  mainContent: {
    flexDirection: "row",
    padding: 20,
  },
  textMain: {
    fontSize: 20,
    color: colors.primary,
    padding: 10,
    justifyContent: "space-between",
  },
  card: {
    margin: 16,
    backgroundColor: "#edf2f7",
  },
  linkText: {
    color: "#3182ce",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  largeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  nowText: {
    fontSize: 12,
    color: "white",
    backgroundColor: "#38a169",
    borderRadius: 4,
    paddingHorizontal: 4,
    marginLeft: 8,
    marginRight: 8,
  },
  smallText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    padding: 20,
  },
  mediumText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d3748",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#4a5568",
    marginRight: 8,
  },
});
