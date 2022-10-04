import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({location}) => {

  return (
    <div className='location'>
        <h2 className='location_tittle'>{location?.name}</h2>
        <ul className='location_info'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationInfo