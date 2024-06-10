
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const MahabharataImages = [
  "https://spiritualquotes.in/wp-content/uploads/2023/04/4-5-1024x1024.jpg",
  "https://spiritualquotes.in/wp-content/uploads/2023/04/1-12-1024x1024.jpg",
  "https://spiritualquotes.in/wp-content/uploads/2023/04/16-5-1024x1024.jpg",
];
const GeetaImages=[
  "https://qph.cf2.quoracdn.net/main-qimg-984397ec72f969ff9e6fb3b20a51fa87-lq",
  "https://i.pinimg.com/736x/f5/d2/e2/f5d2e2d221fca60040496be8ec555523.jpg",
  "https://www.scrolldroll.com/wp-content/uploads/2019/07/Bhagavad-Gita-Quotes-1.jpg"
];
const VedasImages=[
  "https://spiritualquotes.in/wp-content/uploads/2023/03/50-1024x1024.jpg",
  "https://ancientscience.in/media/2017/11/Ancient-Science-Quotes-01.jpg"
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
        
         <Text style={{ fontSize: 24, textAlign: "left", color: 'black', marginTop: 20, marginLeft: 20,fontWeight:"bold"}}>
           Quotes from Mahabharata
         </Text>
      </View>

      <View style={{ padding:20 }}>
        <SliderBox images={MahabharataImages}
        sliderBoxHeight={450}
        sliderBoxWidth={350}  // Set the height of the slider
        ImageComponentStyle={{ borderRadius: 15, width: '100%', margin: 0 }}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay={true}
        circleLoop
        />
      </View>

      <View>
        <Text style={{ fontSize: 24, textAlign: "left", color: 'black', marginLeft: 20,fontWeight:"bold"}}>
          Quotes from Geeta
        </Text>
      </View>

      
      <View style={{ padding:20 }}>
        <SliderBox images={GeetaImages}
        sliderBoxHeight={450}
        sliderBoxWidth={350}  // Set the height of the slider
        ImageComponentStyle={{ borderRadius: 15, width: '100%', margin: 0 }}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay={true}
        circleLoop
        />
      </View>
      <View>
        <Text style={{ fontSize: 24, textAlign: "left", color: 'black', paddingLeft: 20,fontWeight:"bold" }}>
          Quotes from Vedas
        </Text>
      </View>

      <View style={{ padding:20 }}>
        <SliderBox images={VedasImages}
        sliderBoxHeight={450}
        sliderBoxWidth={350} 
        ImageComponentStyle={{ borderRadius: 15, width: '100%', margin: 0 }}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay={true}
        circleLoop
        />
      </View>
      
      
    </ScrollView>
  );
};
