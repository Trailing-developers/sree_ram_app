import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Hello from "./src/screens/Hello";

export default function App() {
  return (
    <View style={styles.container}>
      <Hello />
      <StatusBar style="auto" />
    </View>
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
