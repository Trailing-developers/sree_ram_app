import { Dimensions, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

//https://gifted-charts.web.app/barchart
//more details to use https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts/blob/master/docs/BarChart/BarChartProps.md

const screenWidth = Dimensions.get("window").width;

export default function HistogramV2({ dataPoints }) {
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

  const barData = dataPoints?.map((item) => {
    return {
      value: item?.timing,
      label: item?.label,
      frontColor: item?.color,
    };
  });

  return (
    <View style={styles.container}>
      <BarChart
        barWidth={20}
        noOfSections={2}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        width={screenWidth}
        yAxisThickness={0}
        xAxisThickness={0}
        hideYAxisText={true}
        isAnimated={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: -30,
    width: 500,
    flex: 1,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 30,
  },
});
