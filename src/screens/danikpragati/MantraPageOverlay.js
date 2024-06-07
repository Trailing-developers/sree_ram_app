import React from "react";
import { Dimensions, StyleSheet,ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import { colors } from "../../constants/theme";

export default function MantraPageOverlay ({item}) {
    return(
    <ScrollView style={styles.container}>
        <Text style={styles.title}>{item?.item.title}</Text>
        {item?.item.content.map((it, i) => {
        return (
          <Text key={i + it} style={styles.mantra}>
            {it}
          </Text>
        );
      })}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      height: Dimensions.get("screen").height * 0.70,
      width: Dimensions.get("screen").width * 0.85 ,
      backgroundColor: "white",
      top: Dimensions.get("screen").height * 0.065,
      left: Dimensions.get("screen").width * 0.07, 
      position: "absolute",
      borderRadius: 10,
      borderWidth: 3,
      borderColor: colors.bhagwa,
    },
    title: {
      fontSize: 25,
      color: colors.black,
      marginBottom: 30,
      fontWeight: "bold",
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      textAlign: "center",
      padding: 8,
    },
    mantra: {
      color: colors.black,
      fontSize: 20,
      lineHeight: 20,
      padding: 30,
    },
})