import { StyleSheet, Text, View } from "react-native";
import Mynavigation from "./src/navigation/Mynavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSetupTrackPlayer } from "./src/hooks/useSetupTrackPlayer";
import { SplashScreen } from "expo-router";
import { useCallback } from "react";
import { useLogTrackPlayerState } from "./src/hooks/useLogTrackPlayerState";
import { FloatingPlayerProvider } from "./src/hooks/FloatingPlayerContext";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  });

  useLogTrackPlayerState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FloatingPlayerProvider>
        <Mynavigation />
      </FloatingPlayerProvider>
    </GestureHandlerRootView>
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
