import { useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { TouchableOpacity } from "react-native-gesture-handler";

export default PhotoDetailPage = ({ route }) => {
  const { index, itemList } = route.params;
  const { width, height } = Dimensions.get("screen");
  const SMALL_WINDOW_WIDTH = 80;
  const SPACING = 10;

  const topRef = useRef();
  const bottomRef = useRef();
  const [activeIndex, setActiveIndex] = useState(index);

  const setScrollActiveIndex = (updatedIndex) => {
    setActiveIndex(updatedIndex);
    topRef?.current?.scrollToOffset({
      offset: updatedIndex * width,
      animated: true,
    });

    if (
      updatedIndex * (SMALL_WINDOW_WIDTH + SPACING) - SMALL_WINDOW_WIDTH / 2 >
      width / 2
    ) {
      bottomRef?.current?.scrollToOffset({
        offset:
          updatedIndex * (SMALL_WINDOW_WIDTH + SPACING) -
          width / 2 +
          SMALL_WINDOW_WIDTH / 2,
        animated: true,
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <FlatList
        ref={topRef}
        data={itemList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={(ev) => {
          setScrollActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, rindex }) => {
          return (
            <View style={{ width, height }}>
              <FastImage
                source={{ uri: item.media }}
                style={[StyleSheet.absoluteFillObject]}
                resizeMode="contain"
              />
            </View>
          );
        }}
      />
      <FlatList
        data={itemList}
        ref={bottomRef}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={{
          position: "absolute",
          bottom: SMALL_WINDOW_WIDTH,
        }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => setScrollActiveIndex(index)}>
              <FastImage
                source={{ uri: item.media }}
                style={{
                  width: SMALL_WINDOW_WIDTH,
                  height: SMALL_WINDOW_WIDTH,
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: index === activeIndex ? "#fff" : "transparent",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
