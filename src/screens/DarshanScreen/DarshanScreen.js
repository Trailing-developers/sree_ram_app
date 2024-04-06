import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TempleCarousel from "./TempleCarousel";
// import ParsadAndOther from "./ParsadAndOther";
// import HotelsAndRestaurantCarousel from "./HotelsAndRestaurantCarousel";

export default function DarshanScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <TempleCarousel />
        {/* <ParsadAndOther />
        <HotelsAndRestaurantCarousel /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
