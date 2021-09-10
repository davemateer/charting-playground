import "../../node_modules/react-vis/dist/style.css";
import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
import { averageTimeToClose } from "../shared/data";

const data1 = averageTimeToClose.map((d) => ({
  x: d.hours,
  y: d.hh,
}));

const data2 = averageTimeToClose.map((d) => ({
  x: d.hours,
  y: d.irf,
}));

const data3 = averageTimeToClose.map((d) => ({
  x: d.hours,
  y: d.snf,
}));

const ReactVisBarChartImpl = () => (
  <FlexibleWidthXYPlot height={300} xType="ordinal" stackBy="y">
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <VerticalBarSeries data={data1} barWidth={0.5} />
    <VerticalBarSeries data={data2} barWidth={0.5} />
    <VerticalBarSeries data={data3} barWidth={0.5} />
  </FlexibleWidthXYPlot>
);

export default ReactVisBarChartImpl;
