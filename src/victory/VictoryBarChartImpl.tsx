import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from "victory";
import { chartColors } from "../shared/constants";
import { averageTimeToClose } from "../shared/data";

const VictoryBarChartImpl = () => (
  <VictoryChart theme={VictoryTheme.material}>
    <VictoryStack colorScale={chartColors}>
      <VictoryBar data={averageTimeToClose} x="hours" y="hh" />
      <VictoryBar data={averageTimeToClose} x="hours" y="snf" />
      <VictoryBar data={averageTimeToClose} x="hours" y="irf" />
    </VictoryStack>
  </VictoryChart>
);

export default VictoryBarChartImpl;
