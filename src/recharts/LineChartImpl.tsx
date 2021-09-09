import { format, parseISO } from "date-fns";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartAspect, statusColors } from "../shared/constants";
import { sampleCasesOverTime } from "../shared/data";

const formatDate = (date: string) => {
  return format(parseISO(date), "M/d");
};

const LineChartImpl = () => (
  <ResponsiveContainer width="100%" aspect={chartAspect}>
    <LineChart data={sampleCasesOverTime}>
      <Line
        name="Pended cases"
        type="monotone"
        dataKey="pended"
        stroke={statusColors["pending"]}
      />
      <CartesianGrid />
      <XAxis dataKey="date" tickFormatter={formatDate} />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartImpl;
