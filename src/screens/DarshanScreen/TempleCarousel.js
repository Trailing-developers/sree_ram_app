// import React from "react";
// import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// // import Carousel, { Pagination } from "react-native-snap-carousel";
// import Carousel from "react-native-reanimated-carousel";

import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const data = [
  {
    title: "Ayodhya Shree Ram Mandir",
    body: "I love holi",
    imgUrl:
      "https://www.livemint.com/lm-img/img/2024/01/21/600x338/Ram_Temple_in_Ayodhya_1705838563493_1705838563927.jpg",
  },
  {
    title: "Hanuman Gadi",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl:
      "https://images1.livehindustan.com/uploadimage/library/2024/01/06/16_9/16_9_6/hanuman_garhi_1704510100.jpg",
  },
  {
    title: "Kedarnath",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl:
      "https://img.invinciblengo.org/iconscout/f:jpeg/w:2000/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/trek/439bc989-b47a-4fa5-a410-acc44e93dbff",
  },
];

export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1) + 10;
export const width = Dimensions.get("window").width;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  container2: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

// export default function TempleCarousel() {
//   const isCarousel = React.useRef(null);
//   const [index, setIndex] = React.useState(0);

//   return (
//     <View style={styles.container2}>
//       {/* <Carousel
//         layoutCardOffset={3}
//         ref={isCarousel}
//         data={data}
//         renderItem={CarouselCardItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         inactiveSlideShift={0}
//         onSnapToItem={(index) => setIndex(index)}
//         useScrollView={true}
//       /> */}
//       <Carousel
//         loop
//         width={width}
//         height={width / 2}
//         autoPlay={true}
//         data={data}
//         scrollAnimationDuration={1000}
//         onSnapToItem={(index) => console.log("current index:", index)}
//         renderItem={CarouselCardItem}
//       />
//       {/* <Pagination
//         dotsLength={data.length}
//         activeDotIndex={index}
//         carouselRef={isCarousel}
//         dotStyle={{
//           width: 10,
//           height: 10,
//           borderRadius: 5,
//           marginHorizontal: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.92)",
//         }}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={0.6}
//         tappableDots={true}
//       /> */}
//     </View>
//   );
// }
function TempleCarousel() {
  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={CarouselCardItem}
      />
    </View>
  );
}

export default TempleCarousel;