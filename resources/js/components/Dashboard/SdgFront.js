import React, {useState, useEffect} from 'react'
import { laravel_api } from '../configuration';

function SdgFront() {

    const [districts, setDistricts] = useState([])

    const fetchDistricts = () => {
        fetch(`${laravel_api}sdgmaplist`)
        .then(response => response.json())
        .then(data => {
          setDistricts(data)
        })
    }

    useEffect(() => {
        fetchDistricts()
    }, []);


  return (
    <>
    {districts.map( district => {return <p key={district.id}>{district.district}</p>})}
    </>
  )
}

export default SdgFront