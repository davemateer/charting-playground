import "./App.css";
import React from "react";
import LineChartImpl from "./recharts/LineChartImpl";
import AreaChartImpl from "./recharts/AreaChartImpl";
import PieChartImpl from "./recharts/PieChartImpl";
import BarChartImpl from "./recharts/BarChartImpl";
import ChartContainer from "./shared/ChartContainer";
import { chartAspect } from "./shared/constants";
import VictoryLineChartImpl from "./victory/VictoryLineChartImpl";
import VictoryAreaChartImpl from "./victory/VictoryAreaChartImpl";
import VictoryPieChartImpl from "./victory/VictoryPieChartImpl";
import VictoryBarChartImpl from "./victory/VictoryBarChartImpl";

function App() {
  return (
    <main>
      <ChartContainer caption="Pending cases by date (recharts: line)">
        <LineChartImpl />
      </ChartContainer>
      <ChartContainer caption="Pending cases by date (recharts: area)">
        <AreaChartImpl />
      </ChartContainer>
      <ChartContainer caption="Case status, last 30 days (recharts: pie)">
        <PieChartImpl />
      </ChartContainer>
      <ChartContainer
        caption="Avg hours to resolve, last 90 days (recharts: bar)"
        className="col-2"
      >
        <BarChartImpl aspect={chartAspect * 2} />
      </ChartContainer>
      <ChartContainer
        caption="Pending cases by date (victory: line)"
        className="row-break"
      >
        <VictoryLineChartImpl />
      </ChartContainer>
      <ChartContainer caption="Pending cases by date (victory: area)">
        <VictoryAreaChartImpl />
      </ChartContainer>
      <ChartContainer caption="Case status, last 30 days (victory: pie)">
        <VictoryPieChartImpl />
      </ChartContainer>
      <ChartContainer caption="Avg hours to resolve, last 90 days (victory: bar)" className="col-2">
        <VictoryBarChartImpl />
      </ChartContainer>
    </main>
  );
}

export default App;
