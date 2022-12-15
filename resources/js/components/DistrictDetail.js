import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DistrictDetail() {
  let { district } = useParams();
  let navigate = useNavigate();

  if(district === 'hazaribagh'){
    window.open(`https://hazaribag.nic.in/`,'_blank')
  }
  if(district === 'saraikela-kharsawan'){
    window.open(`https://seraikela.nic.in/`,'_blank')
  }
  if(district === 'purbi-singhbhum'){
    window.open(`https://jamshedpur.nic.in/`,'_blank')
  }
  if(district === 'pashchimi-singhbhum'){
    window.open(`https://chaibasa.nic.in/`,'_blank')
  }
  if(district === 'kodarma'){
    window.open(`https://koderma.nic.in/`,'_blank')
  }

  window.open(`https://${district}.nic.in`,'_blank')

  useEffect(() => {
    navigate('/')
  })

  return (
    <h1 className='b'>Loading...</h1>
  )
}

export default DistrictDetail