import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Text, Button, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PanchangaScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Icon name="arrow-left" size={24} color="black" />
      <Text style={styles.headerText}>Panchanga for Today</Text>
      <View style={styles.iconRow}>
        <Icon name="share-variant" size={24} color="black" />
        <Icon name="calendar" size={24} color="black" />
      </View>
    </View>

    <View style={styles.calendar}>
      {/* Calendar dates will be added here */}
      {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
        <View key={index} style={styles.calendarDay}>
          <Text style={styles.calendarText}>{day}</Text>
        </View>
      ))}
    </View>

    <View style={styles.selectedDate}>
      <Text style={styles.selectedDateText}>5</Text>
    </View>

    <Card style={styles.card}>
      <Card.Title
        title="Tithi"
        right={() => <Text style={styles.linkText}>WHAT IS THIS?</Text>}
      />
      <Card.Content>
        <View style={styles.row}>
          <Text style={styles.largeText}>Chaturdashi</Text>
          <Text style={styles.nowText}>NOW</Text>
          <Text style={styles.largeText}>Amavasya</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.smallText}>upto 07:30 pm today</Text>
          <Text style={styles.smallText}>upto 05:42 pm on 6th</Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Title title="Sun & Moon Timings" />
      <Card.Content>
        <View style={styles.row}>
          <Icon name="weather-sunset-up" size={20} color="black" />
          <Text style={styles.smallText}>05:41 am</Text>
          <Icon name="weather-sunset-down" size={20} color="black" />
          <Text style={styles.smallText}>07:11 pm</Text>
        </View>
        <View style={styles.row}>
          <Icon name="weather-night" size={20} color="black" />
          <Text style={styles.smallText}>05:12 am</Text>
          <Icon name="weather-night" size={20} color="black" />
          <Text style={styles.smallText}>06:23 pm</Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Title
        title="More about the day"
        right={() => <Text style={styles.linkText}>WHAT IS THIS?</Text>}
      />
      <Card.Content>
        <View style={styles.row}>
          <Icon name="weather-partly-cloudy" size={20} color="black" />
          <View>
            <Text style={styles.mediumText}>Krishna Paksha, Vaisakha Masa</Text>
            <Text style={styles.smallText}>1946 Krodhi, Shaka Samvat</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Icon name="star" size={20} color="black" />
          <Text style={styles.smallText}>
            Krittika Nakshatra upto 08:51 pm today
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="star-four-points" size={20} color="black" />
          <Text style={styles.smallText}>
            Rohini Nakshatra from 08:51 pm upto 07:51 pm on 6th
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.mediumText}>AYANA</Text>
          <Text style={styles.smallText}>Uttarayana</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.mediumText}>RITU</Text>
          <Text style={styles.smallText}>Grishma Summer</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.mediumText}>VAARA</Text>
          <Text style={styles.smallText}>Budhavaara Wednesday</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.mediumText}>YOGA</Text>
          <Text style={styles.smallText}>Atiganda upto 02:51 am today</Text>
          <Text style={styles.smallText}>Sukarma upto 12:09 am on 6th</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.mediumText}>KARANA</Text>
          <Text style={styles.smallText}>Vishti upto 08:31 am today</Text>
          <Text style={styles.smallText}>Shakuni upto 07:30 pm today</Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Title
        title="Muhurta Today"
        right={() => <Text style={styles.linkText}>WHAT IS THIS?</Text>}
      />
      <Card.Content>
        <Text style={styles.smallText}>
          Ordinary day: Suitable for regular activities; no special blessings.
        </Text>
        <Text style={styles.mediumText}>Good and Bad Muhurta</Text>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Text style={styles.smallText}>AMRIT KALA No auspicious time</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Text style={styles.smallText}>
            ABHIJIT MUHURTA Starts in 9 hours at 12:26 pm
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Text style={styles.smallText}>
            YAMAGANDA KALA Starts in 4 hours at 07:22 am
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Text style={styles.smallText}>
            GULIKA KALA Starts in 7 hours at 10:45 am
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Text style={styles.smallText}>
            RAHU KALA Starts in 9 hours at 12:26 pm
          </Text>
        </View>
      </Card.Content>
    </Card>

    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.mediumText}>Wednesday Prayer</Text>
        <Text style={styles.smallText}>7m</Text>
        <Button mode="contained" onPress={() => console.log("Start Prarthana")}>
          START PRARTHANA
        </Button>
      </Card.Content>
    </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d3748",
  },
  iconRow: {
    flexDirection: "row",
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  calendarDay: {
    alignItems: "center",
  },
  calendarText: {
    color: "#718096",
    fontWeight: "bold",
  },
  selectedDate: {
    alignItems: "center",
    marginBottom: 16,
  },
  selectedDateText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "orange",
  },
  card: {
    marginBottom: 16,
    backgroundColor: "#edf2f7",
  },
  linkText: {
    color: "#3182ce",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  largeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3748",
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
    fontSize: 14,
    color: "#4a5568",
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

export default PanchangaScreen;
