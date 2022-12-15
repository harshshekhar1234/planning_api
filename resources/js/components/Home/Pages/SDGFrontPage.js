import React,{useEffect} from 'react'
import { img_url } from '../../configuration';
// import {adminLogin} from '../../store/department-action'

function SDGFrontPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

//   useEffect(() => {
//     if (!localStorage.getItem('access_token')){
//       dispatch(adminLogin())
//     }
// }, []);

  return (<>
  <div className='h2 w2 shiftend'>
  <a href="https://sdgindiaindex.niti.gov.in/#/state-compare?goal=AllGoal&area=IND020&timePeriod=2020" target="_blank" className='dib pr3 link dim black pointer'>
  <i className="fas fa-bars"></i>
  </a>
  </div>
    <div className = "flex justify-center align-center mb3">
    <img src={`${img_url}sdgscoregraphjharkhand.png`} className="w-100" alt="Under Construction" />
</div>
</>
  )
}

export default SDGFrontPage