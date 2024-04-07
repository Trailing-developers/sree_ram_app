import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TempleCarousel from "./TempleCarousel";
import ParsadAndOther from "./ParsadAndOther";
import HotelsAndRestaurantCarousel from "./HotelsAndRestaurantCarousel";

const widgetData = [
  {
    wigetTitle: "Popular Temples to visit",
    data: [
      {
        name: "Kedarnath",
        state: "Uttarakhand",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg",
      },
      {
        name: "Somnath",
        state: "Gujarat",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/220px-Somanath_mandir_%28cropped%29.jpg",
      },
      {
        name: "Vaishno Devi",
        state: "Katra, Jammu",
        imgUrl:
          "https://lh3.googleusercontent.com/p/AF1QipP_Hch3F6ImspvOZUbz8bWUksyQFehsM6rXEoUm=s1360-w1360-h1020",
      },
    ],
  },
  {
    wigetTitle: "Popular Shiva Temples to visit",
    data: [
      {
        name: "Sivan Kovil",
        state: "London",
        imgUrl:
          "https://lh3.googleusercontent.com/p/AF1QipNgiBtLzZ03v0uOMWjUze6QETGA9NfxvJsEYpff=s1360-w1360-h1020",
      },
      {
        name: "Shiva temple",
        state: "Buffalo , New York",
        imgUrl:
          "https://s3-media0.fl.yelpcdn.com/bphoto/FHjuREpEVZdjjp2AIqRllQ/1000s.jpg",
      },
      {
        name: "Vaishno Devi",
        state: "Katra, Jammu",
        imgUrl:
          "https://lh3.googleusercontent.com/p/AF1QipP_Hch3F6ImspvOZUbz8bWUksyQFehsM6rXEoUm=s1360-w1360-h1020",
      },
    ],
  },
  {
    wigetTitle: "Popular Krishna Temples to visit",
    data: [
      {
        name: "Sivan Kovil",
        state: "London",
        imgUrl:
          "https://lh3.googleusercontent.com/p/AF1QipNgiBtLzZ03v0uOMWjUze6QETGA9NfxvJsEYpff=s1360-w1360-h1020",
      },
      {
        name: "Shiva temple",
        state: "Buffalo , New York",
        imgUrl:
          "https://s3-media0.fl.yelpcdn.com/bphoto/FHjuREpEVZdjjp2AIqRllQ/1000s.jpg",
      },
      {
        name: "Vaishno Devi",
        state: "Katra, Jammu",
        imgUrl:
          "https://lh3.googleusercontent.com/p/AF1QipP_Hch3F6ImspvOZUbz8bWUksyQFehsM6rXEoUm=s1360-w1360-h1020",
      },
    ],
  },
];
//TODO add spacing between each widget here and pass to the children
export default function DarshanScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <TempleCarousel />
        {widgetData.map((d) => {
          return <ParsadAndOther d={d} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
