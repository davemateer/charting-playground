import { VictoryPie } from "victory";
import { caseStatusLast60Days } from "../shared/data";

const VictoryPieChartImpl = () => (
  <VictoryPie data={caseStatusLast60Days} x="name" y="value" innerRadius={50} />
);

export default VictoryPieChartImpl;
