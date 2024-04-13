import { SharedTransition, withSpring } from "react-native-reanimated";

const SPRING_CONFIG = {
  mass: 1,
  stiffness: 300,
  damping: 300,
};

const CustomTransition = SharedTransition.custom((values) => {
  "worklet";
  return {
    height: withSpring(values.targetHeight, SPRING_CONFIG),
    width: withSpring(values.targetWidth, SPRING_CONFIG),
    originX: withSpring(values.targetOriginX, SPRING_CONFIG),
    originY: withSpring(values.targetOriginY, SPRING_CONFIG),
  };
});

export default CustomTransition;
