import React from 'react';
import { img_url } from '../../configuration';

function Cards() {
  return <div className="row row-cols-1 row-cols-md-3 g-4 shift dhoom">
      <div className="col">
    <div className="card bg-transparent shadow-2 grow pointer">
    <img src={`${img_url}image10.jpg`} className="card-img-top" alt="pic"/>
      <div className="card-body">
        <h5 className="card-title b ju">Composite Score</h5>
        <p className="card-text f4 b bb dark-green">97.4% <span> &#9650;</span><br /><span className='f6 fw4 black'>2020</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent shadow-2 grow pointer">
    <img src={`${img_url}image9.jpg`} className="card-img-top" alt="pic"/>
      <div className="card-body">
        <h5 className="card-title b ju">Health and Nutrition</h5>
        <p className="card-text f4 b bb dark-red">77.4%<span> &#9660;</span><br /><span className='f6 fw4 black'>2020</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent shadow-2 grow pointer">
    <img src={`${img_url}image5.jpg`} className="card-img-top" alt="pic"/>
      <div className="card-body">
        <h5 className="card-title b ju">Infrastructure</h5>
        <p className="card-text f4 b bb dark-green">97.4% <span> &#9650;</span><br /><span className='f6 fw4 black'>2020</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent shadow-2 grow pointer">
    <img src={`${img_url}image6.jpg`} className="card-img-top" alt="pic"/>
      <div className="card-body">
        <h5 className="card-title b ju">Education</h5>
        <p className="card-text f4 b bb gold">97.4% <span> &#9654;</span><br /><span className='f6 fw4 black'>2020</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent shadow-2 grow pointer">
    <img src={`${img_url}image7.jpg`} className="card-img-top" alt="pic"/>
      <div className="card-body">
        <h5 className="card-title b ju">Agriculture</h5>
        <p className="card-text f4 b bb dark-green">97.4% <span> &#9650;</span><br /><span className='f6 fw4 black'>2020</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card bg-transparent shadow-2 grow pointer">
    <img src={`${img_url}image8.jpg`} className="card-img-top" alt="pic"/>
      <div className="card-body">
        <h5 className="card-title b ju">Financial Inclusion</h5>
        <p className="card-text f4 b bb dark-red">77.4%<span> &#9660;</span><br /><span className='f6 fw4 black'>2020</span></p>
      </div>
    </div>
  </div>
</div>;
}

export default Cards;
