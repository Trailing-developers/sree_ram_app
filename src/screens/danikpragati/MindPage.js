import { Text, View } from "react-native";

export const MindPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignSelf: "center",

          backgroundColor: "red",
          height: 100,
          width: "80%",
          margin: 10,
          borderRadius: 30,
        }}
      >
        <Text style={{ padding: 10 }}>MindPage</Text>
      </View>
    </View>
  );
};
