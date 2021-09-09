import { format, parseISO } from "date-fns";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { statusColors } from "../shared/constants";
import { sampleCasesOverTime } from "../shared/data";

const formatDate = (date: string) => {
  return format(parseISO(date), "M/d");
};

const VictoryLineChartImpl = () => (
  <VictoryChart theme={VictoryTheme.material}>
    <VictoryLine
      data={sampleCasesOverTime}
      x="date"
      y="pended"
      interpolation="natural"
      style={{ data: { stroke: statusColors["pending"] } }}
    />
    <VictoryAxis dependentAxis />
    <VictoryAxis tickFormat={(d) => formatDate(d)} />
  </VictoryChart>
);

export default VictoryLineChartImpl;
