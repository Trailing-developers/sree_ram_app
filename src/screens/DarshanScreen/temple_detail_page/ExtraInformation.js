import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const ExtraInformation = ({ data }) => {
  return (
    <Card>
      <Card.Title title={"Temple Information"} style={styles.cardTitle} />
      <Card.Content>
        {data.dosAndDonts.map((section) => (
          <View key={section.title}>
            <Text style={styles.title}>{section.title}</Text>
            {section.data.map((item) => (
              <Text key={item} selectable={true} style={styles.item}>
                * {item}
              </Text>
            ))}
          </View>
        ))}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
  },
  item: {
    marginLeft: 10,
  },
});

export default ExtraInformation;
