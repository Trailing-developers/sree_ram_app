import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import moment from "moment";
import Date from "./Date";
import { Tithi } from "./Tithi";
import { colors } from "../../constants/theme";

export default CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const [dates, setDates] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState();

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates = [];
    for (let i = -2; i < 20; i++) {
      const date = moment().add(i, "days");
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  const getCurrentMonth = () => {
    const month = moment(dates[0])
      .add(scrollPosition / 60, "days")
      .format("MMMM");
    setCurrentMonth(month);
  };

  useEffect(() => {
    getCurrentMonth();
  }, [scrollPosition]);

  return (
    <>
      <View style={styles.centered}>
        <Text style={styles.title}>{currentMonth}</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.scroll}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={(event) =>
              setScrollPosition(event.nativeEvent.contentOffset.x)
            }
            scrollEventThrottle={16}
          >
            <FlatList
              data={dates}
              horizontal
              scrollEnabled={false}
              onEndReached={() => {
                console.log("end reached");
              }}
              onEndReachedThreshold={0.3}
              renderItem={({ item, index }) => (
                <Date
                  date={item}
                  key={index}
                  onSelectDate={setSelectedDate}
                  selected={selectedDate}
                />
              )}
            />
          </ScrollView>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{selectedDate}</Text>
        <Tithi date={selectedDate} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centered: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dateSection: {
    width: "100%",
    padding: 20,
    backgroundColor: colors.light,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
    marginBottom: 10,
    borderColor: "#fff",
  },
});
