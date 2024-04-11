import { StyleSheet, Text, View } from "react-native";
import Mynavigation from "./src/navigation/Mynavigation";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <CharitraScreen/>
    // </View>
    <Mynavigation />
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
