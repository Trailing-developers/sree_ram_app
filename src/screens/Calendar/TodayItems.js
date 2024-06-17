import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { convertTo12HourFormat } from "../../helper/miscellaneous";
import { colors } from "../../constants/theme";

const TodayItems = ({ data }) => {
  console.log(data);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={{
          uri: "https://www.templepurohit.com/wp-content/uploads/2016/11/27-Nakshatras-Nakshatra-Names-and-Character-Traits.jpg",
        }}
      >
        <Text style={styles.location}>Today</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Nakshatra</Text>
            <Text style={styles.infoValue}>{data?.nakshatra?.name}</Text>
            <Text style={styles.infoValue}>
              starts:
              {convertTo12HourFormat(data?.nakshatra?.starts_at.split(" ")[1])}
            </Text>
            <Text style={styles.infoValue}>
              ends:
              {convertTo12HourFormat(data?.nakshatra?.ends_at.split(" ")[1])}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Ritu</Text>
            <Text style={styles.infoValue}>{data?.ritu?.name}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Vedic Weekday</Text>
            <Text style={styles.infoValue}>
              {data?.vedic?.vedic_weekday_name}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Lunar Month</Text>
            <Text style={styles.infoValue}>
              {data?.lunarinfo?.lunar_month_full_name}
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Yoga</Text>
            <Text style={styles.infoValue}>{data?.yogatimes[1]?.name}</Text>
            <Text style={styles.infoValue}>
              upto:
              {" " +
                convertTo12HourFormat(
                  data?.yogatimes[1]?.completion.split(" ")[1]
                )}
            </Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Yoga</Text>
            <Text style={styles.infoValue}>{data?.yogatimes[2]?.name}</Text>
            <Text style={styles.infoValue}>
              upto:
              {" " +
                convertTo12HourFormat(
                  data?.yogatimes[2]?.completion.split(" ")[1]
                )}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#add8e6",
    alignItems: "center",
    padding: 5,
  },
  location: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
    paddingLeft: 20,
  },
  infoBox: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "48%",
  },
  infoLabel: {
    fontSize: 18,
    color: "white",
  },
  infoValue: {
    fontSize: 18,
    marginTop: 5,
    color: colors.bhagwa,
  },
  sunInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  sunText: {
    fontSize: 16,
    marginTop: 10,
  },
  moonInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  moonText: {
    fontSize: 16,
  },
  moonPhase: {
    fontSize: 16,
    marginTop: 5,
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default TodayItems;
