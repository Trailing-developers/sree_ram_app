import React from "react";
import { View, ImageBackground, Text } from "react-native";

const DarshanType = ({ data }) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/DmAQ9GHbea-X_CSDyFrRxA39zPWmz0L064U_TaatEWoW32Fi7-06IlzZvD43s68xvk-NhvGXdmFfm4ZVPHxlOoapOTU=w640-h400-e365-rj-sc0x00ffffff",
        }}
        style={{ width: "100%", height: 200 }}
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
