import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import moment from "moment";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"; // Using Expo for icons
import { useFullCalendarView } from "../../hooks/api/event";
import { colors } from "../../constants/theme";

const FullCalendar = ({ date, setDate }) => {
  const [currentMonth, setCurrentMonth] = useState(date);
  const [calendar, setCalendar] = useState([]);
  const [start, setStart] = useState(moment("2024-06-01"));
  const [end, setEnd] = useState(moment("2024-07-01"));
  const today = moment();

  const { calendarData, isLoading, error } = useFullCalendarView(start, end);

  const ItemDivider = () => {
    return (
      <View
        style={{
          marginLeft: 10,
          borderColor: colors.lightGray,
          borderWidth: StyleSheet.hairlineWidth,
          opacity: 1,
        }}
      />
    );
  };

  useMemo(() => {
    const year = currentMonth.year();
    const month = currentMonth.month();
    const startOfMonth = moment({ year, month, day: 1 });
    const startDayOfWeek = startOfMonth.day();
    const daysInMonth = startOfMonth.daysInMonth();

    // Previous month details
    const prevMonth = moment(startOfMonth).subtract(1, "months");
    const daysInPrevMonth = prevMonth.daysInMonth();

    let calendar = [];
    // Fill with previous month's dates
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      calendar.push({
        day: daysInPrevMonth - i,
        month: prevMonth.month(),
        year: prevMonth.year(),
      });
    }
    // Fill with current month's dates
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push({ day: day, month: month, year: year });
    }
    // Fill the remaining slots with next month's dates
    const remainingDays = 42 - calendar.length; // 42 slots for 6 weeks
    for (let i = 1; i <= remainingDays; i++) {
      calendar.push({
        day: i,
        month: month === 12 ? 1 : month + 1,
        year: month === 12 ? year + 1 : year,
      });
    }
    setStart(`${calendar[0].year}-${calendar[0].month}-${calendar[0].day}`);

    const last = calendar[calendar.length - 1];
    setEnd(`${last.year}-${last.month}-${last.day}`);

    setCalendar(calendar);
  }, [currentMonth]);

  const renderCalendar = () => {
    const weeks = [];
    let week = [];
    calendar.forEach((day, index) => {
      if (index % 7 === 0 && week.length) {
        weeks.push(week);
        week = [];
      }
      week.push(day);
    });
    if (week.length) {
      weeks.push(week);
    }
    return weeks.map((week, i) => (
      <View key={i} style={styles.weekContainer}>
        <View key={i} style={styles.weekRow}>
          {week.map((item, index) => (
            <View key={index} style={styles.dayContainer}>
              <TouchableOpacity
                onPress={() =>
                  setDate(moment(`${item.year}-${item.month + 1}-${item.day}`))
                }
              >
                <Text
                  style={[
                    styles.dayText,
                    item.day === today.date() &&
                      item.month === today.month() &&
                      item.year === today.year() &&
                      styles.highlightedTodayDate,
                    item.day === date.date() &&
                      item.month === date.month() &&
                      item.year === date.year() &&
                      styles.highlightedDate,
                  ]}
                >
                  {item.day}
                </Text>
              </TouchableOpacity>
              {calendarData &&
                calendarData[item.year] &&
                calendarData[item.year][item.month] &&
                calendarData[item.year][item.month][item.day] &&
                calendarData[item.year][item.month][item.day][0] &&
                calendarData[item.year][item.month][item.day][0]["type"] && (
                  <FontAwesome
                    name={getEventIcon(
                      calendarData[item.year][item.month][item.day][0]["type"]
                    )}
                    size={16}
                    color="#9c2b2b"
                  />
                )}
            </View>
          ))}
        </View>
        <ItemDivider />
      </View>
    ));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(moment(currentMonth).subtract(1, "months"));
  };

  const handleNextMonth = () => {
    setCurrentMonth(moment(currentMonth).add(1, "months"));
  };

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

  const getEventIcon = (event) => {
    switch (event) {
      case "festival":
        return "fire";
      case "prodashvrat":
        return "bolt";
      case "amavasya":
        return "moon-o";
      case "purnima":
        return "circle-o";
      case "mashikshivratrivrat":
        return "sun-o";
      case "eclipse":
        return "asterisk";
      case "shasti":
        return "leaf";
      case "ekadashi":
        return "star";
      case "sankashtichaturthi":
        return "certificate";
      // Add more cases for other events
      // default:
      //   return "circle-o";
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ActivityIndicator color="#9c2b2b" size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text>Failed to fetch the data. Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePreviousMonth}>
          {/* <Text style={styles.arrow}>{"<"}</Text> */}
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.monthText}>{currentMonth.format("MMMM YYYY")}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          {/* <Text style={styles.arrow}>{">"}</Text> */}
          <MaterialIcons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.calendar}>
        <View style={styles.weekRow}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <View key={index} style={styles.dayHeaderContainer}>
                <Text style={styles.dayHeaderText}>{day}</Text>
              </View>
            )
          )}
        </View>
        {renderCalendar()}
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

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    backgroundColor: colors.bhagwa,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 20,
  },
  arrow: {
    fontSize: 30,
    marginHorizontal: 20,
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  calendar: {
    width: "100%",
  },
  weekRow: {
    flexDirection: "row",
  },
  dayContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  dayText: {
    fontSize: 18,
  },
  dayHeaderContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  dayHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
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
  highlightedTodayDate: {
    backgroundColor: colors.bhagwadark,
    borderRadius: 16,
    padding: 4,
    color: "white",
  },
  highlightedDate: {
    backgroundColor: "#9c2b2b",
    borderRadius: 16,
    padding: 4,
    color: "white",
  },
});

export default FullCalendar;
