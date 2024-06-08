import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { colors } from "../../constants/theme";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useCalendarEvents } from "../../hooks/api/event";
import CustomCalendar from "./CustomCalendar";
import { Card, Text, Button, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export const Tithi = ({ date }) => {
  const endDate = new Date(date);
  const navigation = useNavigation();
  endDate.setDate(endDate.getDate() + 1);
  const { events, isLoading, error } = useCalendarEvents(date, endDate);

  if (error) return <Text>Something went wrong.</Text>;

  if (isLoading)
    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  console.log(events);

  return (
    <ScrollView>
      <CustomCalendar data={events.data.events[0]} selectedDate={date} />

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
          right={() => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("FestivalScreen");
              }}
            >
              <Text style={styles.linkText}>{">"}</Text>
            </TouchableOpacity>
          )}
        />
        <Card.Content>
          <View style={styles.row}>
            <Icon name="weather-partly-cloudy" size={20} color="black" />
            <View>
              <Text style={styles.mediumText}>
                Krishna Paksha, Vaisakha Masa
              </Text>
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
          <Button
            mode="contained"
            onPress={() => console.log("Start Prarthana")}
          >
            START PRARTHANA
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
    // <FlatList
    //   data={events?.data}
    //   scrollEnabled={false}
    //   contentContainerStyle={{ padding: 10 }}
    //   renderItem={({ item, index }) => {
    //     return (
    //       <View style={styles.festivalContainer}>
    //         <View style={styles.header}>
    //           <Text style={styles.text}>{item.name}</Text>
    //         </View>
    //         <View style={styles.normalContent}>
    //           <Text style={styles.textMain}>{item.description}</Text>
    //           <Text style={styles.textMain}>Moon</Text>
    //         </View>
    //       </View>
    //     );
    //   }}
    // />
    // <ScrollView showsVerticalScrollIndicator={false}>
    //   <View style={styles.container}>
    //     <View style={styles.header}>
    //       <Text style={styles.text}>Tithi</Text>
    //     </View>
    //     <View style={styles.mainContent}>
    //       <Text style={styles.textMain}>Dwadashi</Text>
    //       <Text style={styles.textMain}>Dwadashi</Text>
    //     </View>
    //   </View>
    //   <View style={styles.festivalContainer}>
    //     <View style={styles.header}>
    //       <Text style={styles.text}>Festivals</Text>
    //     </View>
    //     <View style={styles.mainContent}>
    //       <Text style={styles.textMain}>Diwali</Text>
    //     </View>
    //   </View>

    //   <View style={styles.festivalContainer}>
    //     <View style={styles.header}>
    //       <Text style={styles.text}>Sun & Moon Timings</Text>
    //     </View>
    //     <View style={styles.normalContent}>
    //       <Text style={styles.textMain}>Sun</Text>
    //       <Text style={styles.textMain}>Moon</Text>
    //     </View>
    //   </View>

    //   <View style={styles.festivalContainer}>
    //     <View style={styles.header}>
    //       <Text style={styles.text}>More about the day</Text>
    //     </View>
    //     <View style={styles.normalContent}>
    //       <Text style={styles.textMain}>shukla Paksha</Text>
    //       <Text style={styles.textMain}>Uttara Phalguni</Text>
    //     </View>
    //   </View>

    //   <View style={styles.normalContainer}>
    //     <View style={styles.header}>
    //       <Text style={styles.text}>Muhurta Today</Text>
    //     </View>
    //     <View style={styles.someOtherContainer}>
    //       <Text style={styles.text}>Today is good for</Text>
    //       <Text style={styles.smallText}>
    //         Business inaugurations or crucial decisions
    //       </Text>
    //     </View>
    //     <View style={styles.normalContent}>
    //       <Text style={styles.textMain}>Abhijit muhurta starts in 7 hours</Text>
    //       <Text style={styles.textMain}>Amrit Kala starts in 1 hour</Text>
    //     </View>
    //   </View>

    //   <View style={styles.festivalContainer}>
    //     <View style={styles.header}>
    //       <Text>Listen Mantra/songs for this day</Text>
    //     </View>
    //   </View>
    // </ScrollView>
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
    color: colors.primary,
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
    marginBottom: 16,
    backgroundColor: "#edf2f7",
  },
  linkText: {
    color: "#3182ce",
    fontWeight: "bold",
    fontSize: 20,
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
