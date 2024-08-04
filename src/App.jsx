import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInformations from './components/weatherInformations/weatherInformations'
import WeatherInformations5days from './components/weatherInformations5days/weatherInformations5days'

import './App.css'


function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()
  const inputRef = useRef()
   async function searchCity() {
  const city = inputRef.current.value
  const key = "bf0c7cd7d0c5d41debb9129377710509"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
  const apiInfo= await axios.get(url)
  const apiInfo5days= await axios.get(url5days)
  console.log(apiInfo5days)
  setWeather(apiInfo.data)
  setWeather5days(apiInfo5days.data)
  

  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo do João Gabriel</h1>
      <input  ref={inputRef} type='text' placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weather &&<WeatherInformations weather={weather}/>}
      {weather5days &&<WeatherInformations5days weather5days={weather5days}/>}
  
    </div> 
  )
}

export default App
