import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/theme";
import moment from "moment";
import Swiper from "react-native-swiper";

const CalendarScreen = () => {
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const swiper = useRef();

  const weeks = useMemo(() => {
    const start = moment(start).add(week, "weeks").startOf("week");
    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }, (_, i) => {
        const date = moment(start).add(adj, "week").add(i, "day");
        return {
          weekday: date.format("ddd"),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Schedule</Text>
      </View>
      <View style={styles.picker}>
        <Swiper
          index={1}
          ref={swiper}
          showsPagination={false}
          loop={false}
          onIndexChanged={(ind) => {
            if (ind === 1) {
              return;
            }
            setTimeout(() => {
              const newIndex = ind - 1;
              const newWeek = week + newIndex;
              setWeek(newWeek);
              setValue(moment(value).add(newIndex, "weeks").toDate());
              swiper.current.scrollTo(1, true);
            }, 100);
          }}
        >
          {weeks.map((dates, index) => (
            <View
              key={index}
              style={[styles.itemRow, { paddingHorizontal: 16 }]}
            >
              {dates.map((item, dateindex) => {
                const isActive =
                  value.toDateString() === item.date.toDateString();
                return (
                  <TouchableWithoutFeedback
                    key={dateindex}
                    onPress={() => setValue(item.date)}
                  >
                    <View
                      style={[styles.dateItem, isActive && styles.activeItem]}
                    >
                      <Text style={styles.weekday}>{item.weekday}</Text>
                      <Text style={styles.date}>{item.date.getDate()}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          ))}
        </Swiper>
      </View>
      <View style={{ paddingVertical: 24, paddingHorizontal: 16 }}>
        <Text style={styles.contentText}>{value.toDateString()}</Text>
        <View style={styles.placeholder}>
          <View style={styles.placeholderContent}></View>
        </View>
      </View>
    </View>
    // </SafeAreaView>
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
});

export default CalendarScreen;
