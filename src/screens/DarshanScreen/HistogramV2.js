import { Dimensions, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function HistogramV2() {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,

    fillShadowGradient: "#DF5353",
    fillShadowGradientOpacity: 1,
    fillShadowGradientFrom: "#DF5353",
    color: (opacity = 1) => `#023047`,
    labelColor: (opacity = 1) => `#333`,
    strokeWidth: 1,
    barPercentage: 1,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  const timings = [
    { timing: 8, label: "8:00 AM", color: "#DF5353" },
    { timing: 10, label: "", color: "#DF5353" },
    { timing: 15, label: "", color: "#DF5353" },
    { timing: 20, label: "12:00 PM", color: "#DF5353" },
    { timing: 20, label: "", color: "#DF5353" },
    { timing: 15, label: "", color: "#DF5353" },
    { timing: 10, label: "3:00 PM", color: "#DF5353" },
    { timing: 0, label: "", color: "#DF5353" },
  ];

  const labels = timings.map((item) => {
    return item.label;
  });

  const values = timings.map((item) => {
    return item.timing;
  });
  const colors = timings.map((item) => {
    return (opacity = 1) => item.color;
  });

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        colors: colors,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <BarChart
        data={chartData}
        width={screenWidth}
        height={220}
        withInnerLines={false}
        chartConfig={chartConfig}
        showBarTops={false}
        withHorizontalLabels={false}
        withCustomBarColorFromData={true}
        flatColor={true}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -30,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 30,
  },
});
