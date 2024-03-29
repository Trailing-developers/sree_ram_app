import { ScrollView, View } from "react-native";
import TrailCarousel from "./Home/TrailCarousel";
import CalenderWidget from "./Home/CalenderWidget";
import MenuItems from "./Home/MenuItems";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <TrailCarousel />
        <CalenderWidget />
        <MenuItems />
      </ScrollView>
    </SafeAreaView>
  );
}
