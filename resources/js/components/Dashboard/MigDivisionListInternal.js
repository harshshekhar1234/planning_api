import React, {useEffect} from 'react'
import DivisionCard from './Utilities/DivisionCard'
import {getDivisionAll} from '../store/divisions-action';
import {divisionsActions} from '../store/divisionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

function MigDivisionListInternal() {

  const dispatch = useDispatch();
    const divisions = useSelector((state) => state.divisions.divisionAll);

   

    useEffect(() => {
        dispatch(getDivisionAll());
        return () => { 
          dispatch(divisionsActions.setDivisionAll({divisionAll: []})) 
        }
        }, []);

  if(divisions.length === 0){
    return <div>
    <Box sx={{ width: '100%' }}>
     <LinearProgress />
    </Box>
    <h2 className='tc mt2 b'>Loading...</h2>
    </div>
  }

  return (<> 
    <div className='mh1 mh4-m mh5-ns br3'>
        {divisions.map(division => {return <main key={division.id} className="w6 center">
        <Link to={`/dashboard/migrationdivisioninternal/${division.id}`} className='no-underline' style={{ textDecoration: 'none' }}>
    <article className="dt w-100 bb b--black-20 pb2 mt2">
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{`Directorate of ${division.name}`}</h1>
      </div>
      <div className="dtc v-mid">
        <div className="w-100 tr">
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60">View</button>
        </div>
      </div>
    </article>
    </Link>
  </main>

//         <article key={division.id} className="center ba mv4 shadow-2 h4 w5 bg-blue">
//     <Link to={`/dashboard/outcomebudget/${division.id}`} className='no-underline flex flex-wrap' style={{ textDecoration: 'none' }}>
//   <h1 className="f4  white mv0 pv2 ph3">{division.name}</h1>
//   <p className="ml2 f5 b grow no-underline white dim self-end">Download Report &rarr;</p>
//   </Link>
// </article>
})}
    </div>
    </>
  )
}

export default MigDivisionListInternal