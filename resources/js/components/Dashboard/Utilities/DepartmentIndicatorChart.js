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



export function BarChart({label,departments}) {
  const options = {
    scales: {
      x: {
        title: {
          font: {
            size: 20,
            weight: "bold"
          },
          color: 'black'
        },

        ticks: {
          font: {
            size: 15,
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
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datalabels: {
        display: true,
        color: "white",
        font: {
          size: 12,
          weight: "bold"
        }
      },
      title: {
        display: false,
        text: label,
      },
    },
  };
  
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = departments.map(department => department.name)

  const data = {
    labels,
    datasets: [
      {
        label: 'Output Indicator',
        data: departments.map(department => department.outputindicator_count),
        backgroundColor: '#3282B8',
      },
      {
        label: 'Outcome Indicator',
        data: departments.map(department => department.outcomeindicator_count),
        backgroundColor: ' #FBB454',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

