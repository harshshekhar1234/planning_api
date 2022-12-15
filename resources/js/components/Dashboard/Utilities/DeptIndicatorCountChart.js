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



export function BarChart({output,outcome,ach_output,ach_outcome}) {
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
        display: true,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Indicator count',
      },
      datalabels: {
        display: true,
        color: "black",
        formatter: function (value, context) {
          return `${value}`;
        },
        font: {
          size: 15,
          weight: "bold"
        }
      },
    },
  };
  
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = ['Output Indicators','Outcome Indicators']

  const data = {
    labels,
    datasets: [
      {
        label: 'Indicator count',
        barPercentage: 0.4,
        data: [output,outcome],
        backgroundColor: ['#357edd'],
      },
      {
        label: 'Updated Indicator count',
        barPercentage: 0.4,
        data: [ach_output,ach_outcome],
        backgroundColor: ['#ff6300'],
      }
    ],
  };
  return <Bar options={options} data={data} />;
}

