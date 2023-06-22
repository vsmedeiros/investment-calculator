import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartWrapper } from "./style";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ investmentResults }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Progressão do investimento",
      },
    },
  };
  const labels = investmentResults?.map((result) => result.year);
  const data = {
    labels,
    datasets: [
      {
        label: "Investimento total (R$)",
        data: investmentResults?.map((result) => result.savingsEndOfYear),
        borderColor: "#5fdd63",
        backgroundColor: "#4caf50",
      },
    ],
  };
  return (
    <ChartWrapper>
      <Line options={options} data={data}  />
    </ChartWrapper>
  );
}
