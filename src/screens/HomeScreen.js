import { ScrollView, View } from "react-native";
import TrailCarousel from "./Home/TrailCarousel";
import CalenderWidget from "./Home/CalenderWidget";
import MenuItems from "./Home/MenuItems";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHomeWidgets } from "../hooks/api/widgets";
import { useMemo } from "react";
import { ActivityIndicator } from "react-native-paper";

export default function HomeScreen() {
  return (
    <ScrollView>
      <TrailCarousel />
      <CalenderWidget />
      <MenuItems />
    </ScrollView>
  );
}
