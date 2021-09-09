import { format, parseISO } from "date-fns";
import { VictoryArea, VictoryAxis, VictoryChart, VictoryTheme } from "victory";
import { statusColors } from "../shared/constants";
import { sampleCasesOverTime } from "../shared/data";

const formatDate = (date: string) => {
  return format(parseISO(date), "M/d");
};

const VictoryAreaChartImpl = () => (
  <VictoryChart theme={VictoryTheme.material}>
    <VictoryArea
      data={sampleCasesOverTime}
      x="date"
      y="pended"
      interpolation="natural"
      style={{ data: { fill: "#FF8042aa", stroke: statusColors["pending"] } }}
    />
    <VictoryAxis dependentAxis />
    <VictoryAxis tickFormat={(d) => formatDate(d)} />
  </VictoryChart>
);

export default VictoryAreaChartImpl;
