import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function FinancialReportBudgetChart({filtered,sanction,allocation,expenditure}) {

    const data = {
        labels: ['Budget Estimate(Rs in Cr)',  'Sanction(Rs in Cr)','Allocation(Rs in Cr)', 'Expenditure(Rs in Cr)'],
        datasets: [
          {
            label: 'Rs in Cr',
            data: [filtered, sanction, allocation, expenditure],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(139, 219, 129, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)'
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
            text: 'Financial Details of selected Sub-Schemes',
            position: "bottom"
          },
          datalabels: {
            display: true,
            color: "black",
            formatter: function (value, context) {
              return `${value}`;
            },
            font: {
              size: 12,
              weight: "bold"
            }
          },
          maintainAspectRatio: true
        }
      };

  return <Doughnut data={data} options={options}/>;
}