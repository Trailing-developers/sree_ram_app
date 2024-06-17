import * as React from "react";
import { Dimensions, Image, StyleSheet, View,Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { BlurView as _BlurView } from "expo-blur";
import { useHomeWidgets } from "../../../hooks/api/widgets";
import parallaxLayout from "./parallaxLayout";
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8) + 10;
export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
import { SURYA_NAMASKAR } from "../../../data";

const BlurView = Animated.createAnimatedComponent(_BlurView);

const PAGE_WIDTH = Dimensions.get("window").width / 2;

function NewCarousel() {
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);

  // const { data, isLoading, error } = useHomeWidgets();

  // const homeBanners = React.useMemo(() => {
  //   if (!data) return [];
  //   return data?.data?.filter((item) => item?.type === "BANNER")[0].data;
  // }, [data]);

  // if (error) return <Text>Something went wrong.</Text>;

  // if (isLoading)
  //   return (
  //     <View style={{ flex: 1, paddingBottom: 10 }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );

  return (
    <View style={{ flex: 1,  }}>
      <Carousel
        loop={true}
        autoPlay={true}
        style={{
          width: Dimensions.get("window").width * 0.94,
          height: Dimensions.get("screen").height * 0.26,
          marginLeft: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
        width={PAGE_WIDTH}
        data={SURYA_NAMASKAR}
        renderItem={CustomItem}
        customAnimation={parallaxLayout(
          {
            size: PAGE_WIDTH,
            vertical: false,
          },
          {
            parallaxScrollingScale: 1,
            parallaxAdjacentItemScale: 0.5,
            parallaxScrollingOffset: 40,
          },
        )}
        scrollAnimationDuration={1200}
      />
      {/* <SButton
        onPress={() => {
          setIsAutoPlay(!isAutoPlay);
        }}
      >
        {ElementsText.AUTOPLAY}:{`${isAutoPlay}`}
      </SButton> */}
    </View>
  );
}

const CustomItem = ({ item, index, animationValue }) => {
  const maskStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 0, 1],
    );

    return {
      opacity,
    };
  }, [animationValue]);

  return (
    <View
      style={{
        flex: 1,
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }} key={index}
    >
      <Image
        source={{uri: item.image1}}
        resizeMode={"contain"}
        style={{ width: "90%", height: "70%", objectFit: "fill" }}
      />
      <Text >{item.nameofpose}</Text>
      <BlurView
        intensity={50}
        pointerEvents="none"
        style={[StyleSheet.absoluteFill, maskStyle]}
      />
    </View>
  );
};

export default NewCarousel;
