import "../../node_modules/react-vis/dist/style.css";
import { RadialChart } from "react-vis";
import { caseStatusLast60Days } from "../shared/data";

const data = caseStatusLast60Days.map((d) => ({
  angle: d.value,
  label: d.name,
}));

const ReactVisArcChartImpl = () => (
  <RadialChart data={data} height={300} width={300} innerRadius={50} />
);

export default ReactVisArcChartImpl;
