import { format, parseISO } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
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

const AreaChartImpl = () => (
  <ResponsiveContainer width="100%" aspect={chartAspect}>
    <AreaChart data={sampleCasesOverTime}>
      <Area
        name="Pended cases"
        type="monotone"
        dataKey="pended"
        stroke={statusColors["pending"]}
        fill="#FF8042aa"
      />
      <CartesianGrid />
      <XAxis dataKey="date" tickFormatter={formatDate} />
      <YAxis />
      <Tooltip />
    </AreaChart>
  </ResponsiveContainer>
);

export default AreaChartImpl;
