import { View, Text, Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";
import { colors } from "../styles/styles";

const screenWidth = Dimensions.get("screen").width - 40;

const chartConfig = {
  color: (opacity = 1) => `rgba(26,255,146,${opacity})`,
};

const Chart = ({ inStock = 0, outOfStock = 0 }) => {
  const data = [
    {
      name: "Out Of Stock",
      population: outOfStock,
      color: colors.color1_light,
      legendFontColor: colors.color2,
    },
    {
      name: "In Stock",
      population: inStock,
      color: colors.color1_light2,
      legendFontColor: colors.color2,
    },
  ];

  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={150}
      style={{ borderRadius: 20 }}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={colors.color3}
      paddingLeft={"15"}
      absolute
    />
  );
};

export default Chart;
