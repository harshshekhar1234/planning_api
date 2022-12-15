import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function FinancialBarChart({estimate,sanction,allotment,expenditure}) {
  const options = {
    scales: {
      x: {
        barPercentage: 0.1,
        title: {
          font: {
            size: 20,
            weight: "bold"
          },
          color: 'black'
        },

        ticks: {
          font: {
            size: 13,
            weight: "bold"
          },
          color: 'black',
        },
      },

      y: {
        title: {
          font: {
            size: 30,
            weight: "bold"
          },
          color: 'black'
        },

        ticks: {
          
          font: {
            size: 13,
            weight: "bold"
          },
          color: 'black'
        }
      }
    },
    indexAxis: 'x' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Rs in Cr',
      },
      datalabels: {
        color: "black",
        formatter: function (value, context) {
            return `Rs ${value} (Cr)`;
          },
        align: "top",
        anchor: "end",
        clamp: true,
        font: {
          size: "11",
          weight: "bold"
        }
      }
    },
  };
  
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = ['Budget Estimate', 'Sanction', 'Allotment', 'Expenditure']

  const data = {
    labels,
    datasets: [
      {
        label: 'Rs in Cr',
        barPercentage: 0.3,
        data: [estimate,sanction,allotment,expenditure],
        backgroundColor: ['#198754','#ffc107','#96ccff','#ff6300'],
      }
    ],
  };
  return <Bar options={options} data={data} />;
}

