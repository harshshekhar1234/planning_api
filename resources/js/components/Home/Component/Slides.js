import React from 'react';
import { Donought } from './Donought';
import { Polar } from './Polar';
import { PieChart } from './PieChart';
import { BarChart } from './BarChart';

function Slides() {
  return <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
      <div className='w-75'>
      <Donought />
      </div>
    </div>
    <div className="carousel-item">
    <div className='w-75'>
      <Polar />
      </div>
    </div>
    <div className="carousel-item">
    <div className='w-75'>
      <PieChart />
      </div>
    </div>
    <div className="carousel-item">
    <div className='w-75'>
      <BarChart />
      </div>
    </div>
  </div>
</div>
}

export default Slides;
