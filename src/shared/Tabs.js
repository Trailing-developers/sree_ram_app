// Existing code
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, spacing } from "../constants/theme";
import Animated, { BounceIn } from "react-native-reanimated";

const Tabs = ({ items }) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <View style={styles.tabBar}>
        {items.map((item, i) => {
          const active = i === index;
          return (
            <TouchableOpacity
              key={item.type + "_" + i}
              style={[styles.tabs, active && styles.activeTab]}
              onPress={() => setIndex(i)}
            >
              {active && (
                <Animated.View entering={BounceIn} style={styles.dot} />
              )}
              <Text style={active ? styles.activeTabText : styles.tabText}>
                {item.type}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {items[index].contentView()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: spacing.l,
    paddingBottom: spacing.m,
  },
  tabs: {
    marginLeft: spacing.m + 20,
    margin: 10,
    backgroundColor: "#ccc",
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 10,
  },
  activeTab: {
    borderBottomColor: "#900",
    borderBottomWidth: 3,
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
  tabText: {
    color: colors.primary,
    fontSize: 20,
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  dot: {
    position: "absolute",
    top: 18,
    left: -13,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});

export default Tabs;
