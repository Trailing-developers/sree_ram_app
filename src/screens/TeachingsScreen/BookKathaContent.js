import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../constants/theme";
// import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Katha_content } from "../../data";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PinchGestureHandler } from "react-native-gesture-handler";

const BookKathaContent = ({ route }) => {
  const { bookId, pdfLink } = route.params;
  const navigation = useNavigation();
  const source = {
    uri: pdfLink,
    cache: true,
  };
  console.log(bookId);

  // // Shared values for pinch-to-zoom
  // const scale = useSharedValue(1);
  // const focalX = useSharedValue(0);
  // const focalY = useSharedValue(0);

  // // Animated styles for zooming
  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       { translateX: focalX.value },
  //       { translateY: focalY.value },
  //       { scale: scale.value },
  //       { translateX: -focalX.value },
  //       { translateY: -focalY.value },
  //     ],
  //   };
  // });

  // // Gesture handler for pinch-to-zoom
  // const pinchGestureHandler = useAnimatedGestureHandler({
  //   onActive: (event) => {
  //     scale.value = event.scale;
  //     focalX.value = event.focalX;
  //     focalY.value = event.focalY;
  //   },
  //   onEnd: () => {
  //     // Ensure zoom scale does not go below 1
  //     scale.value = withSpring(Math.max(1, scale.value));
  //   },
  // });
  return (
    <View style={styles.container} >
      <View style={styles.titlecontainer}> 
        <Text style={styles.titletxtstyle}>{Katha_content.title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.linecontainer}>
        <View style={styles.linecontainer}>
        {Katha_content.body.map(line=><Text style={styles.linetxtstyle}>{line}</Text>)}
        </View>
      </ScrollView>
      {/* <ScrollView >
        <PinchGestureHandler onGestureEvent={pinchGestureHandler}>
          <Animated.View style={[animatedStyle,styles.linecontainer]}>
            {Katha_content.body.map((line, index) => (
              <Text key={index} style={styles.linetxtstyle}>
                {line}
              </Text>
            ))}
          </Animated.View>
        </PinchGestureHandler> 
      </ScrollView> */}
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AudioPlayer");
          }}
          style={{ left: 10 }}
        >
          <FontAwesome5 name="music" size={40} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("VideoScreen")}
          style={{ right: 10}}
        >
          <FontAwesome5 name="youtube" size={40} color={colors.black} />
        </TouchableOpacity>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "black",
  },
  iconContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: colors.bhagwa,
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width ,
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 10,
  },
  titlecontainer: {
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    height: Dimensions.get("window").height * 0.09,
  },
  titletxtstyle: {
    fontSize: 40,
    textAlign: "center",
    top: 12,
  },
  linecontainer: {
    flexGrow: 1,
    width: Dimensions.get("window").width,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 85,
    marginTop: 2,
  },
  linetxtstyle: {
    fontSize: 15,
    textAlign: "center",
  },
});

export default BookKathaContent;

