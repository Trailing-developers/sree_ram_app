import React from "react";
import { Image, StyleSheet, View ,Text, Dimensions} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, shadow, sizes } from "../../constants/theme";

export default function NewCard ({
    onPress, source, title
}) {
    return(
        <TouchableOpacity
           onPress={onPress}
           style={[styles.card]} 
        >
            <Image source = {{uri: source}} style={[styles.image]}/>
            <Text style = {styles.cardtext}>{title}</Text> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: Dimensions.get("screen").height * 0.25,
        width: Dimensions.get("screen").width / 2.2,
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom: Dimensions.get("screen").width * 0.03,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        objectFit: "fill",
        position: "relative",
    },
    cardtext: {
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        fontStyle: "normal",
        fontSize: 20,
        fontWeight: "bold",
        bottom: 0,
        width: Dimensions.get("screen").width / 2.2,
        height: 40,
        textAlign: "center",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: 5,
    }
})