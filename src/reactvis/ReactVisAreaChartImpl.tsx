import "../../node_modules/react-vis/dist/style.css";
import { format, parseISO } from "date-fns";
import {
  AreaSeries,
  AreaSeriesPoint,
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
} from "react-vis";
import { statusColors } from "../shared/constants";
import { sampleCasesOverTime } from "../shared/data";

const data: AreaSeriesPoint[] = sampleCasesOverTime.map((d, ix) => ({
  x: parseISO(d.date).getTime(),
  y: d.pended,
}));

const ReactVisAreaChartImpl = () => (
  <FlexibleWidthXYPlot height={300}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis tickFormat={(t) => format(t, "M/d")} />
    <YAxis />
    <AreaSeries
      data={data}
      curve="curveNatural"
      color={statusColors["pending"]}
      fill="#FF8042aa"
    />
  </FlexibleWidthXYPlot>
);

export default ReactVisAreaChartImpl;
