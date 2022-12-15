import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const plugins = [{
  beforeDraw: function(chart) {
   var width = chart.width,
       height = chart.height,
       ctx = chart.ctx;
       ctx.restore();
       var fontSize = (height / 160).toFixed(2);
       ctx.font = fontSize + "em sans-serif";
       ctx.textBaseline = "top";
       var text = "Foo-bar",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2;
       ctx.fillText(text, textX, textY);
       ctx.save();
  } 
}]

export function Donought() {
  return <Doughnut data={data} plugins={plugins} />;
}