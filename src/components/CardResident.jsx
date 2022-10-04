import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/cardResident.css'

const CardResident = ({url}) => {

    const [resident, setResident] = useState()

    useEffect(() => {
      axios.get(url)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <article className='card_resident'>
        <header className='resident_header'>
            <img src={resident?.image} alt="img_resident" className='resident_img'/>
            <div className='resident_status'>
                <span className='resident_status_info'>Status: {resident?.status}</span>
            </div>
        </header>
        <section className='resident_info'>
            <h3 className='resident_name'>{resident?.name}</h3>
            <ul className='resident_more_info'>
                <li><span>Species: </span>{resident?.species}</li>
                <li><span>Origin: </span>{resident?.origin.name}</li>
                <li><span>Appears: </span>{resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default CardResident