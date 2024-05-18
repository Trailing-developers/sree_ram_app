// Existing code
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, spacing } from "../constants/theme";
import Animated, { BounceIn } from "react-native-reanimated";

const Tabs = ({ items }) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {items.map((item, i) => {
            const active = i === index;
            return (
              <TouchableOpacity
                key={item.type + "_" + i}
                style={[styles.tabs, active && styles.activeTab]}
                onPress={() => setIndex(i)}
              >
                <View>
                  <Text style={active ? styles.activeTabText : styles.tabText}>
                    {item.type}
                  </Text>
                  {active && (
                    <Animated.View entering={BounceIn} style={styles.dot} />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View>{items[index].contentView()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: spacing.m,
  },
  tabs: {
    marginLeft: spacing.s,
    marginTop: spacing.s,
    paddingLeft: 50,
    paddingRight: 40,
    borderRadius: 10,
    marginLeft: 20,
    backgroundColor: colors.bhagwa,
  },
  activeTab: {
    borderRadius: 10,
  },
  tabText: {
    color: colors.primary,
    fontSize: 15,
  },
  activeTabText: {
    color: colors.primary,
    fontSize: 15,
  },
  dot: {
    position: "absolute",
    top: 8,
    right: -15,
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});

export default Tabs;
