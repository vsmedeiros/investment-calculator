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
    scales: {
      
      x: {
        grid: {
          color: "rgba(255, 255, 255,.1)",
        },
        ticks: { font: { size: 16 }, color: "white" },
        title: {
          display: true,
          color: "#ffffff",
          text: "Anos",
          font: { size: 16 },
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255,.1)",
        },
        ticks: { font: { size: 16 }, color: "white" },
        title: {
          display: true,
          color: "#ffffff",
          text: "Investimento total",
          font: { size: 16 },
        },
      },
    },
    responsive: true,
    color: "white",
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Progressão do investimento",
        color: "white",
        font: { size: 16 },
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
      <Line options={options} data={data} />
    </ChartWrapper>
  );
}
