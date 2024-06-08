import React from "react";
import { Dimensions, StyleSheet,ScrollView, Text, Image, ImageBackground } from "react-native";
import { View } from "react-native-animatable";
import { colors } from "../../constants/theme";

export default function MantraPageOverlay ({item}) {
    return(
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{uri: item.item.image}} style={styles.image}/>
        <View style={styles.overlay}/>
      </View>
      <Text style={styles.title}>{"||  " + item?.item.title + "  ||"}</Text>
      <ScrollView>
        {item?.item.content.map((it, i) => {
        return (
          <Text key={i + it} style={styles.mantra}>
            {it}
          </Text>
        );
      })}
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: Dimensions.get("screen").height * 0.70,
      width: Dimensions.get("screen").width * 0.85,
      backgroundColor: "white",
      top: Dimensions.get("screen").height * 0.065,
      left: Dimensions.get("screen").width * 0.07, 
      position: "absolute",
      borderRadius: 10,
      borderWidth: 3,
      borderColor: colors.bhagwa,
    },
    image: {
      height: "100%",
      width:  "100%",
      objectFit: "fill",
      borderRadius: 10,
      position: "absolute",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      borderRadius: 10,
    },
    title: {
      fontSize: 25,

      fontStyle: "italic",
      color: colors.black,
      marginBottom: 30,
      fontWeight: "500",
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      textAlign: "center",
      padding: 10,
    },
    mantra: {
      color: colors.black,
      fontSize: 20,
      lineHeight: 20,
      padding: 30,
    },
})