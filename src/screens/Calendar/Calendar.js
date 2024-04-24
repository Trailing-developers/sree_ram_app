import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../constants/theme";
import {
  Calendar,
  Agenda,
  ExpandableCalendar,
  CalendarProvider,
  AgendaList,
} from "react-native-calendars";

// https://blog.logrocket.com/create-customizable-shareable-calendars-react-native/

const items = {
  "2024-04-01": [{ name: "Cycling" }, { name: "Walking" }, { name: "Running" }],
  "2024-04-05": null,
  "2024-04-12": [{ name: "Writing" }],
};
const iitems = [
  {
    title: "2024-04-24",
    data: [{ name: "Cycling" }, { name: "Walking" }, { name: "Running" }],
  },
  {
    title: "2024-04-27",
    data: [{ name: "Cycling" }, { name: "Walking" }, { name: "Running" }],
  },
];

const marked = {
  "2024-04-10": { marked: true, dotColor: "red" },
  "2024-04-12": {
    marked: true,
    selected: true,
    selectedColor: "#aa2222",
    selectedTextColor: "yellow",
    dotColor: "white",
  },
};

const leftArrowIcon = require("../../../assets/icons/previous.png");
const rightArrowIcon = require("../../../assets/icons/next.png");

const CalendarScreen = () => {
  const [selected, setSelected] = useState(new Date());

  const renderItem = (item) => {
    console.log(item);
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>{item.item.name}</Text>
      </TouchableOpacity>
    );
  };

  const marked = useMemo(
    () => ({
      [selected]: {
        selected: true,
        selectedColor: "#222222",
        selectedTextColor: "yellow",
      },
    }),
    [selected]
  );
  const ds = new Date().toDateString();

  return (
    <CalendarProvider showTodayButton date={ds}>
      <ExpandableCalendar
        marked={marked}
        leftArrowImageSource={leftArrowIcon}
        rightArrowImageSource={rightArrowIcon}
      />
      <AgendaList
        sections={iitems}
        renderItem={renderItem}
        // scrollToNextEvent
        sectionStyle={styles.section}
        // dayFormat={'yyyy-MM-d'}
      />
    </CalendarProvider>
    // <Calendar
    //   onDayPress={(d) => setSelected(d.dateString)}
    //   onMonthChange={(date) => console.log("onMonthChange", date)}
    //   markedDates={marked}
    // />
    // <Agenda
    //   selected={ds}
    //   items={{
    //     "2024-04-01": [
    //       { name: "Cycling" },
    //       { name: "Walking" },
    //       { name: "Running" },
    //     ],
    //     "2024-04-05": null,
    //     "2024-04-12": [{ name: "Writing" }],
    //   }}
    //   renderItem={(item, isFirst) => {
    //     if (item == null) return <></>;
    //     return (
    //       <TouchableOpacity style={styles.item}>
    //         <Text style={styles.itemText}>{item.name}</Text>
    //       </TouchableOpacity>
    //     );
    //   }}
    //   theme={{
    //     backgroundColor: colors.bhagwadark,
    //     calendarBackground: colors.bhagwa,
    //     agendaDayNumColor: "green",
    //   }}
    //   style={{
    //     backgroundColor: colors.bhagwa,
    //   }}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  picker: {
    flext: 1,
    maxHeight: 84,
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#333",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginHorizontal: -4,
  },
  dateItem: {
    flex: 1,
    height: 50,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: "center",
    borderColor: colors.gray,
    flexDirection: "column",
  },
  weekday: {
    fontSize: 12,
    color: colors.gray,
    fontWeight: "600",
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: "#333",
    fontWeight: "700",
  },
  activeItem: {
    backgroundColor: colors.bhagwa,
    borderColor: colors.bhagwa,
  },
  contentText: {
    fontSize: 27,
    fontWeight: "600",
    color: colors.gray,
    marginBottom: 10,
  },
  placeholder: {
    flex: 1,
    height: 400,
  },
  placeholderContent: {
    borderWidth: 4,
    borderColor: "#e5e7eb",
    borderStyle: "dashed",
    borderRadius: 9,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    backgroundColor: colors.bhagwa,
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "#888",
    fontSize: 16,
  },
  section: {
    backgroundColor: colors.bhagwadark,
    color: "grey",
    textTransform: "capitalize",
  },
});

export default CalendarScreen;
