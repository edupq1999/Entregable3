import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorScreeen from './components/ErrorScreeen'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [HasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput){
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    console.log(id)
    axios.get(URL)
      .then(res => {
          setHasError(false)
          setLocation(res.data)
          })
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.id_location.value}`
    axios.get(URL)
      .then(res => {
          setHasError(false)
          setSearchInput(res.data.results[0].id)
          event.target.reset()
          setSuggestedList()
        })
      .catch(err => setHasError(true))
  }
  
  const handleChange = event => {
    if(event.target.value === ''){
      return setSuggestedList()
    }

    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
    
    axios.get(URL)
      .then(res => {
        setHasError(false)
        setSuggestedList(res.data.results)
      })
      .catch(err => setSuggestedList())
  }
  return (
    <div className="App">
      <h1 className='app_tittle'>Rick and Morty</h1>
      <form className='app_form' onSubmit={handleSubmit}>
        <input 
          className='app_input'
          id='id_location' 
          placeholder='Enter another name of universe' 
          type="text" 
          onChange={handleChange}
        />
        <button className='app_button'>Search</button>
        <FilterList 
          setSearchInput = {setSearchInput}
          suggestedList = {suggestedList}
          setSuggestedList = {setSuggestedList}
        />
      </form>
      {
        HasError ?
          <ErrorScreeen />
        :
        <>
          <LocationInfo location={location}/>
          <div className='resident'>
            {
              location?.residents.map( url => (
                <CardResident
                  key = {url}
                  url = {url}
                />
              ))
            }
          </div>
        </>
      }
      </div>
  )
}

export default App
