import { useState } from 'react'
import './style/App.css'
import Form from "./components/form"
import CurrentWeather from './components/weather';



//const Link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`



function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
      <div className='container1'>
        <Form onSearchChange={handleOnSearchChange}/>
        <CurrentWeather/>
      </div>
  )
}

export default App
