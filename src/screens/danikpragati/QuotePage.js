import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const MahabharataImages = [
  "https://spiritualquotes.in/wp-content/uploads/2023/04/4-5-1024x1024.jpg",
  "https://spiritualquotes.in/wp-content/uploads/2023/04/1-12-1024x1024.jpg",
  "https://spiritualquotes.in/wp-content/uploads/2023/04/16-5-1024x1024.jpg",
];
const GeetaImages = [
  "https://qph.cf2.quoracdn.net/main-qimg-984397ec72f969ff9e6fb3b20a51fa87-lq",
  "https://i.pinimg.com/736x/f5/d2/e2/f5d2e2d221fca60040496be8ec555523.jpg",
  "https://www.scrolldroll.com/wp-content/uploads/2019/07/Bhagavad-Gita-Quotes-1.jpg",
];
const VedasImages = [
  "https://spiritualquotes.in/wp-content/uploads/2023/03/50-1024x1024.jpg",
  "https://ancientscience.in/media/2017/11/Ancient-Science-Quotes-01.jpg",
];

export const QuotePage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* <Text style={{ padding: 10 }}>MindPage</Text> */}
      <Image
        style={{
          height: 213,
          width: 330,
          margin: 15,
          borderRadius: 20,
          left: 28,
          top: 50,
        }}
        source={{
          uri: "https://motivationalwizard.com/wp-content/uploads/2021/10/Mahabharata-Quotes-3.png",
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            fontStyle: "Extrabold",
            color: "white",
          }}
        >
          SATVIK AAHAR
        </Text>
      </View>
      <Image
        style={{
          height: 213,
          width: 330,
          margin: 15,
          borderRadius: 20,
          left: 28,
          top: 70,
        }}
        source={{
          uri: "https://i.pinimg.com/736x/5d/54/53/5d545334a5dce140d7a9ed3dc0a215ec.jpg",
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            fontStyle: "Extrabold",
            color: "white",
          }}
        >
          AYURVEDA AAHAR
        </Text>
      </View>
      <Image
        style={{
          height: 213,
          width: 330,
          margin: 15,
          borderRadius: 20,
          left: 28,
          top: 80,
        }}
        source={{
          uri: "https://www.1mg.com/hi/patanjali/wp-content/uploads/2019/04/Normal-diet-plan-2.jpg",
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            fontStyle: "Extrabold",
            color: "white",
          }}
        >
          AAHAR VYAVHAR
        </Text>
      </View>
    </View>
  );
};
const scrollToPosition = () => {
  scrollViewRef.current?.scrollTo({ y: 100, animated: true });
};
