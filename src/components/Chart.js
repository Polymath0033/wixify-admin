import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

const Chart = ({ data }) => {
  return <Bar data={data} />;
};
export default Chart;
