import React from 'react'
import './styles/filterList.css'

const FilterList = ({suggestedList, setSearchInput, setSuggestedList}) => {
    const handleClick = id => setSearchInput(id)
  return (
    <ul className='filter'>
        {
            suggestedList?.map(location => (
                <li 
                    className='filter_option'
                    onClick={() => {handleClick(location.id); setSuggestedList()}}
                    key={location.id}
                >
                    {location.name}
                </li>
            ))
        }
    </ul>
  )
}

export default FilterList