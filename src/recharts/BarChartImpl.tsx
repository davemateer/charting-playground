import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartProps } from "../shared/ChartProps";
import { chartAspect, chartColors } from "../shared/constants";
import { averageTimeToClose } from "../shared/data";

const BarChartImpl = ({ aspect = chartAspect }: ChartProps) => (
  <ResponsiveContainer width="100%" aspect={aspect}>
    <BarChart data={averageTimeToClose}>
      <CartesianGrid />
      <XAxis dataKey="hours" label="Hours" />
      <YAxis label="Cases" />
      <Tooltip />
      <Legend />
      <Bar dataKey="hh" stackId="a" fill={chartColors[0]} />
      <Bar dataKey="snf" stackId="a" fill={chartColors[1]} />
      <Bar dataKey="irf" stackId="a" fill={chartColors[2]} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartImpl;
