import "../../node_modules/react-vis/dist/style.css";
import { format, parseISO } from "date-fns";
import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineMarkSeries,
  LineSeriesPoint,
  VerticalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
import { statusColors } from "../shared/constants";
import { sampleCasesOverTime } from "../shared/data";

const data: LineSeriesPoint[] = sampleCasesOverTime.map((d, ix) => ({
  x: parseISO(d.date).getTime(),
  y: d.pended,
}));

const ReactVisLineChartImpl = () => (
  <FlexibleWidthXYPlot height={300}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis tickFormat={(t) => format(t, "M/d")} />
    <YAxis />
    <LineMarkSeries
      data={data}
      curve="curveNatural"
      color={statusColors["pending"]}
    />
  </FlexibleWidthXYPlot>
);

export default ReactVisLineChartImpl;
