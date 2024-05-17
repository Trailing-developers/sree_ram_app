import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/theme";
import { ScrollView } from "react-native-gesture-handler";

export const Tithi = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Tithi</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.textMain}>Dwadashi</Text>
          <Text style={styles.textMain}>Dwadashi</Text>
        </View>
      </View>
      <View style={styles.festivalContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>Festivals</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.textMain}>Diwali</Text>
        </View>
      </View>

      <View style={styles.festivalContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>Sun & Moon Timings</Text>
        </View>
        <View style={styles.normalContent}>
          <Text style={styles.textMain}>Sun</Text>
          <Text style={styles.textMain}>Moon</Text>
        </View>
      </View>

      <View style={styles.festivalContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>More about the day</Text>
        </View>
        <View style={styles.normalContent}>
          <Text style={styles.textMain}>shukla Paksha</Text>
          <Text style={styles.textMain}>Uttara Phalguni</Text>
        </View>
      </View>

      <View style={styles.normalContainer}>
        <View style={styles.header}>
          <Text style={styles.text}>Muhurta Today</Text>
        </View>
        <View style={styles.someOtherContainer}>
          <Text style={styles.text}>Today is good for</Text>
          <Text style={styles.smallText}>
            Business inaugurations or crucial decisions
          </Text>
        </View>
        <View style={styles.normalContent}>
          <Text style={styles.textMain}>Abhijit muhurta starts in 7 hours</Text>
          <Text style={styles.textMain}>Amrit Kala starts in 1 hour</Text>
        </View>
      </View>
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
});
