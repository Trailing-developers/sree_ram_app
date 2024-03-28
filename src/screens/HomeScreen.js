import { View } from "react-native";
import TrailCarousel from "./Home/TrailCarousel";
import CalenderWidget from "./Home/CalenderWidget";
import MenuItems from "./Home/MenuItems";

    export default function HomeScreen() {
        return (
          <View >
            <TrailCarousel/>
            <CalenderWidget/>
            <MenuItems/>
          </View>
        );
    }