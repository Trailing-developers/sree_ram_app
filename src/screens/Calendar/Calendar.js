import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import moment from "moment";
import Date from "./Date";
import { Tithi } from "./Tithi";

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
    backgroundColor: "#AF0C6E",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
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
});
