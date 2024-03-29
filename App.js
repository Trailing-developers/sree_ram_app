import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/screens/Hello";
import HomeScreen from "./src/screens/HomeScreen";
import CharitraScreen from "./src/screens/CharitraPaath/CharitraScreen";
import Mynavigation from "./src/navigation/Mynavigation";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <CharitraScreen/>
    // </View>
    <Mynavigation/> 
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
});
