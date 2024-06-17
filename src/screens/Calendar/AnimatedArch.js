import React, { useEffect } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedArch = ({ imageSource, archColor = "rgba(0, 0, 0, 0.5)" }) => {
  const animationValue = useSharedValue(0);

  useEffect(() => {
    animationValue.value = withTiming(1, { duration: 2000 });
  }, []);

  const { width, height } = Dimensions.get("screen");

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  svg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});

export default AnimatedArch;
