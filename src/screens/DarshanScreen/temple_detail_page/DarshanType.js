import React from "react";
import { View, ImageBackground, Text } from "react-native";

const DarshanType = ({ data }) => {
  return (
    <View style={{ margin: 10, marginVertical: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Darshan Prices Onsite
      </Text>
      <ImageBackground
        source={{
          uri: "https://londonmandir.baps.org/images/2011/10/darshan02_main.jpg",
        }}
        style={{ width: "100%", height: 200 }}
        blurRadius={5}
      >
        <Text style={{ fontSize: 20, color: "white", margin: 10 }}>
          General Darshan: 10
        </Text>

        <Text style={{ fontSize: 20, color: "white", margin: 10 }}>
          Special Darshan: 20
        </Text>

        <Text style={{ fontSize: 20, color: "white", margin: 10 }}>
          VIP Darshan: 50
        </Text>
      </ImageBackground>
    </View>
  );
};

export default DarshanType;
