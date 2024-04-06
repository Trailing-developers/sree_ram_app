import * as React from "react";
import { Dimensions, Text, View, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const data = [
  {
    title: "Hotel 1 ",
    body: "I love holi",
    imgUrl:
      "https://t4.ftcdn.net/jpg/05/60/58/67/360_F_560586710_VmIHNuH6TcdLHIn3cEuIDDAcCYBhkIL0.jpg",
  },
  {
    title: "Hotel 2",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://images.indianexpress.com/2020/11/diwali-feature-1.jpg",
  },
  {
    title: "Hotel 3",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl:
      "https://media.gettyimages.com/id/458583265/photo/goddess-during-durga-puja-celebrations.jpg?s=612x612&w=gi&k=20&c=InuPVvTsHwQh7Q6bR_e2ZjtnaXYC1HwPNzDNLCUN2dU=",
  },
];

export const SLIDER_WIDTH = Dimensions.get("window").width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8) + 10;
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

// export default function HotelsAndRestaurantCarousel() {
//   const isCarousel = React.useRef(null);
//   const [index, setIndex] = React.useState(0);

//   return (
//     <View style={styles.container2}>
//       <Carousel
//         layoutCardOffset={3}
//         ref={isCarousel}
//         data={data}
//         renderItem={CarouselCardItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         inactiveSlideShift={0}
//         onSnapToItem={(index) => setIndex(index)}
//         useScrollView={true}
//       />
//       <Pagination
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
//       />
//     </View>
//   );
// }
function HotelsAndRestaurantCarousel() {
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

  export default HotelsAndRestaurantCarousel;
