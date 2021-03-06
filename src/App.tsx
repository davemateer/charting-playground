import "./App.css";

import React from "react";

import ReactVisAreaChartImpl from "./reactvis/ReactVisAreaChartImpl";
import ReactVisLineChartImpl from "./reactvis/ReactVisLineChartImpl";
import AreaChartImpl from "./recharts/AreaChartImpl";
import BarChartImpl from "./recharts/BarChartImpl";
import LineChartImpl from "./recharts/LineChartImpl";
import PieChartImpl from "./recharts/PieChartImpl";
import ChartContainer from "./shared/ChartContainer";
import { chartAspect } from "./shared/constants";
import VictoryAreaChartImpl from "./victory/VictoryAreaChartImpl";
import VictoryBarChartImpl from "./victory/VictoryBarChartImpl";
import VictoryLineChartImpl from "./victory/VictoryLineChartImpl";
import VictoryPieChartImpl from "./victory/VictoryPieChartImpl";
import ReactVisArcChartImpl from "./reactvis/ReactVisArcChartImpl";
import ReactVisBarChartImpl from "./reactvis/ReactVisBarChartImpl";

function App() {
  return (
    <main>
      <div className="summary">
        <h1>Summary</h1>
        <ul>
          <li>
            <strong>React-vis</strong> appears to be abandoned, had least usable
            API; not recommended.
          </li>
          <li>
            <strong>Recharts</strong> and <strong>Victory</strong> both seem to
            be useable, active libraries that would likely cover any charting
            needs we would have for this project.
          </li>
          <li>
            Slight preference among the team towards <strong>Recharts</strong>{" "}
            with the important caveat that none of us spent a great deal of time
            in any of these libraries.
          </li>
          <li>
            Recommendation would be to wait until we actually have a use case,
            and then see which library (<strong>Recharts</strong> or{" "}
            <strong>Victory</strong>) seems to implement that use case the
            cleanest.
          </li>
        </ul>
      </div>
      <h1>Recharts</h1>
      <ChartContainer caption="Pending cases by date (line)">
        <LineChartImpl />
      </ChartContainer>
      <ChartContainer caption="Pending cases by date (area)">
        <AreaChartImpl />
      </ChartContainer>
      <ChartContainer caption="Case status, last 30 days (pie)">
        <PieChartImpl />
      </ChartContainer>
      <ChartContainer
        caption="Avg hours to resolve, last 90 days (bar)"
        className="col-2"
      >
        <BarChartImpl aspect={chartAspect * 2} />
      </ChartContainer>
      <h1>Victory</h1>
      <ChartContainer caption="Pending cases by date (line)">
        <VictoryLineChartImpl />
      </ChartContainer>
      <ChartContainer caption="Pending cases by date (area)">
        <VictoryAreaChartImpl />
      </ChartContainer>
      <ChartContainer caption="Case status, last 30 days (pie)">
        <VictoryPieChartImpl />
      </ChartContainer>
      <ChartContainer
        caption="Avg hours to resolve, last 90 days (bar)"
        className="col-2"
      >
        <VictoryBarChartImpl />
      </ChartContainer>
      <h1>React-vis</h1>
      <ChartContainer caption="Pending cases by date (line)">
        <ReactVisLineChartImpl />
      </ChartContainer>
      <ChartContainer caption="Pending cases by date (area)">
        <ReactVisAreaChartImpl />
      </ChartContainer>
      <ChartContainer caption="Case status, last 30 days (radial)">
        <ReactVisArcChartImpl />
      </ChartContainer>
      <ChartContainer
        caption="Avg hours to resolve, last 90 days (bar)"
        className="col-2"
      >
        <ReactVisBarChartImpl />
      </ChartContainer>
    </main>
  );
}

export default App;
