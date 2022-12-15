import React, {useState, useEffect} from 'react';
import Cards2 from './Cards2';
import Slides2 from './Slides2';
import {
  getPublicIndicatorCountData,
  getPublicCountStatusData
} from '../../store/dashboard-actions';
import { useSelector, useDispatch } from 'react-redux';


function Main() {

  const dispatch = useDispatch();

  const countIndicator = useSelector((state) => state.dashboard.countIndicators);

  useEffect(() => {
    dispatch(getPublicCountStatusData())
    dispatch(getPublicIndicatorCountData())
  }, []);

  return <main className="cfa w-100a">
  <div className="fla w-100a w-50-nsa">
    <div className="aspect-ratio aspect-ratio--16x9">
      <div className=''>
      <Slides2 />
      </div>
    </div>
  </div>
  <div className="fla w-100a w-50-nsa">
    <div className="shift">
      <div className="">
          <Cards2 finance={countIndicator.financial_outlay ? countIndicator.financial_outlay.toFixed(2) : 0}/>
      </div>
    </div>
  </div>  
</main>;
}

export default Main;
