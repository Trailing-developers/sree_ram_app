import React from "react";
import { Dimensions, View, StyleSheet, Image} from "react-native";
import TrailCarousel, { width } from "../Home/TrailCarousel";
import NewCarousel from "./Yoga/NewCarousel";
import { color } from "react-native-elements/dist/helpers";
import { BlurView } from "@react-native-community/blur";

export const Yoga = () => {
    return(
        <View style={{flex: 1}}>
            <Image source={{uri: "https://i.pinimg.com/736x/e9/fa/bf/e9fabfda8477328bb9767abef571cd41.jpg"}} style={styles.image}/>
            <BlurView blurType="light" blurAmount={3.5} style={styles.absolute} />
            <View style={styles.carouselcontainer}>
                <Image source={{uri: "https://www.sarathi.org/images/articles/surya-namaskar1.jpg"}} style={styles.image}/>
                <View style={styles.overlay}/>
                <NewCarousel/>
            </View>
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width ,
        // backgroundColor: "black",
    },
    carouselcontainer: {
        width: Dimensions.get("screen").width * 0.97,
        height: Dimensions.get("screen").height * 0.28,
        // backgroundColor: "black",
        marginTop: 20,
        marginLeft: 5.5,
        borderRadius: 15,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "fill",
        position: "absolute",
        borderRadius: 15,
    },
    absolute: {
        position: 'absolute',
        backgroundColor: "rgba(255,196,112,0.1)",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 230, 0.65)',
        borderRadius: 10,
    },
});