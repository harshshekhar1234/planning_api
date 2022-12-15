import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);




export function PieChart({total,filtered}) {
  const data = {
    labels: ['Total Sub-Schemes Budget Estimate', 'Filtered Sub-Schemes Budget Estimate'],
    datasets: [
      {
        label: 'Budget Estimate',
        data: [total,filtered],
        backgroundColor: [
          "rgb(122,231,125)",
          "rgb(255,232,117)",
        ],
        borderColor: [
          "rgb(122,231,125)",
          "rgb(255,232,117)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    animation: {
      animateScale: true
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      },
      title: {
        display: true,
        text: 'Budget Estimate of selected Sub-Schemes against Total Budget Estimate',
        position: "bottom"
      },
      datalabels: {
        display: true,
        color: "black",
        formatter: function (value, context) {
          return `Rs ${value} (Cr)`;
        },
        font: {
          size: 13,
          weight: "bold"
        }
      },
      maintainAspectRatio: true
    }
  };
  return <Pie data={data} options={options}/>;
}