import { ImageBackground, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import WeatherScreenVideo from "./WeatherScreenVideo";
import SunriseSunset from "./SunriseSunset";
import ScrollWidgets from "./ScrollWidgets";
import TodayItems from "./TodayItems";

export default SunAndMoonRise = ({ data }) => {
  return (
    <Card style={styles.card}>
      {/* <ImageBackground
        source={{
          uri: "https://media.istockphoto.com/id/1368099869/photo/full-moon-setting-over-choppy-waters.jpg?s=612x612&w=0&k=20&c=wPdqF-tRU8ddqF0HgJAueXy4NuKhYdmRRRyc5cIYdmo=",
        }}
        style={{ aspectRatio: 16 / 9 }}
      >
        <Card.Title title="Moon Timings" titleStyle={{ color: "white" }} />
      </ImageBackground> */}
      {/* <AnimatedArch
        imageSource={
          "https://media.istockphoto.com/id/1368099869/photo/full-moon-setting-over-choppy-waters.jpg?s=612x612&w=0&k=20&c=wPdqF-tRU8ddqF0HgJAueXy4NuKhYdmRRRyc5cIYdmo="
        }
      /> */}
      <SunriseSunset
        sunriseLabel={"Sunrise"}
        sunsetLabel={"Sunset"}
        sunrise={data?.sun_moon_rise?.astronomy?.astro?.sunrise}
        sunset={data?.sun_moon_rise?.astronomy?.astro?.sunset}
        image="https://t4.ftcdn.net/jpg/05/83/87/67/360_F_583876738_eC5lsIKAvQ6tR2HhkXcGk3hCPL2gLPhv.jpg"
      />
      <SunriseSunset
        sunriseLabel={"Moonrise"}
        sunsetLabel={"Moonset"}
        sunrise={data?.sun_moon_rise?.astronomy?.astro?.moonrise}
        sunset={data?.sun_moon_rise?.astronomy?.astro?.moonset}
        image="https://media.istockphoto.com/id/1368099869/photo/full-moon-setting-over-choppy-waters.jpg?s=612x612&w=0&k=20&c=wPdqF-tRU8ddqF0HgJAueXy4NuKhYdmRRRyc5cIYdmo="
      />
      <TodayItems data={data} />
      <WeatherScreenVideo />
      <ScrollWidgets />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: "#edf2f7",
    paddingBottom: 20,
  },
});
