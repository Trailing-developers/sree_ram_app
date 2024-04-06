// import { Dimensions, Platform, StyleSheet, View, Image } from "react-native";
// import { Avatar, Button, Card, Text } from "react-native-paper";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import Carousel, { ParallaxImage } from "react-native-snap-carousel";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
// const { width: screenWidth } = Dimensions.get("window");
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     width: screenWidth - 60,
//     height: screenWidth - 60,
//   },
//   imageContainer: {
//     flex: 1,
//     marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
//     backgroundColor: "white",
//     borderRadius: 8,
//   },
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     resizeMode: "cover",
//   },
// });

// export default function Hello() {
//   //   return (
//   //     <SafeAreaProvider>
//   //       <View>
//   //         <Card>
//   //           <Card.Title
//   //             title="Card Title"
//   //             subtitle="Card Subtitle"
//   //             left={LeftContent}
//   //           />
//   //           <Card.Content>
//   //             <Text variant="titleLarge">Card title</Text>
//   //             <Text variant="bodyMedium">Card content</Text>
//   //           </Card.Content>
//   //           <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//   //           <Card.Actions>
//   //             <Button>Cancel</Button>
//   //             <Button>Ok</Button>
//   //           </Card.Actions>
//   //         </Card>
//   //         <Text>Hello, World!</Text>
//   //         <Image
//   //           source={{
//   //             uri: "https://i.pinimg.com/originals/f0/a1/7a/f0a17a58ad3d0db9e8410124cb822260.webp",
//   //           }}
//   //           style={{ width: 400, height: 400 }}
//   //         />
//   //       </View>
//   //     </SafeAreaProvider>
//   //   );

//   const entries = {
//     activeIndex: 0,
//     carouselItems: [
//       {
//         title: "Beautiful and dramatic Antelope Canyon",
//         subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
//         illustration: "https://picsum.photos/200/300",
//       },
//       {
//         title: "Earlier this morning, NYC",
//         subtitle: "Lorem ipsum dolor sit amet",
//         illustration: "https://picsum.photos/200/300",
//       },
//       {
//         title: "White Pocket Sunset",
//         subtitle: "Lorem ipsum dolor sit amet et nuncat ",
//         illustration: "https://picsum.photos/200/300",
//       },
//       {
//         title: "Acrocorinth, Greece",
//         subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
//         illustration: "https://picsum.photos/200/300",
//       },
//       {
//         title: "The lone tree, majestic landscape of New Zealand",
//         subtitle: "Lorem ipsum dolor sit amet",
//         illustration: "https://picsum.photos/200/300",
//       },
//     ],
//   };

//   _renderItem = ({ item, index }, parallaxProps) => {
//     return (
//       <View
//         style={{
//           backgroundColor: "floralwhite",
//           borderRadius: 5,
//           height: 250,
//           padding: 50,
//           marginLeft: 25,
//           marginRight: 25,
//         }}
//       >
//         <Image
//           source={{ uri: item.illustration }}
//           //   containerStyle={styles.imageContainer}
//           style={styles.image}
//           //   parallaxFactor={0.4}
//           //   {...parallaxProps}
//         />
//         <Text style={styles.title} numberOfLines={2}>
//           {item.title}
//         </Text>
//       </View>
//     );
//   };

//   return (
//     <Carousel
//       ref={(c) => {
//         this._carousel = c;
//       }}
//       data={entries.carouselItems}
//       renderItem={this._renderItem}
//       sliderWidth={300}
//       itemWidth={300}
//       layout={"stack"}
//     />
//   );
// }
