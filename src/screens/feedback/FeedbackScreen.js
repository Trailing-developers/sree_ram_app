import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Slider } from "react-native-awesome-slider";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../../constants/theme";

export default FeedbackScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const colors = ["#F5CECE", "#FFE3D5", "#FFF5D1", "#F0FAEA", "#D4E9C6"];
  const labels = ["Horrible", "Not Good", "OK!", "Good", "Excellent"];
  const faces = [
    "face-sad-cry",
    "face-frown",
    "face-meh",
    "face-grin-wink",
    "face-laugh",
  ];

  const progress = useSharedValue(1);
  const min = useSharedValue(0);
  const max = useSharedValue(5);

  const handlePress = () => {};

  const caValue =
    parseInt(sliderValue / 2) >= faces.length
      ? faces.length - 1
      : parseInt(sliderValue / 2);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors[caValue],
      }}
    >
      <Text style={styles.title}>How would you rate your experience?</Text>
      <View style={styles.smiley}>
        <FontAwesome6 name={faces[caValue]} size={80} />
      </View>
      <Text style={styles.title}>{labels[caValue]}</Text>

      <Slider
        style={styles.slider}
        progress={progress}
        onValueChange={(value) => setSliderValue(value)}
        minimumValue={min}
        maximumValue={max}
        renderBubble={() => <FontAwesome6 name={faces[caValue]} size={40} />}
        // theme={{
        //   disableMinTrackTintColor: "#fff",
        //   maximumTrackTintColor: "#fff",
        //   minimumTrackTintColor: "#000",
        //   bubbleBackgroundColor: "#666",
        //   heartbeatColor: "#999",
        // }}
      />
      <View style={styles.buttonContainer}>
        <TouchableHighlight onPress={handlePress}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 35,
    marginVertical: 30,
  },
  smiley: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  slider: {
    justifyContent: "center",
    alignContent: "center",
    padding: 30,
    width: "80%",
  },
  sliderThumb: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#666",
  },
  buttonContainer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "blue",
    marginBottom: 20,
  },
  buttonLabel: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
  },
});
