import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Before from './components/Before';
import EightDayForecast from './components/EightDayForecast';
import Weather from './components/Weather';

const App = () => {
  const [search, setSearch] = useState('')
  const [key, setKey] = useState(`f635fd423c694871a7bc42d487175b7d`)
  const [load, setLoad] = useState({ isLoading: true, mainLoad: false,})
  const [data, setData] = useState({})
  
  function handleGetAPi() {
    setLoad({mainLoad: true, isLoading: true})
    fetch(`https://api.weatherbit.io/v2.0/current?city=${search}&key=f635fd423c694871a7bc42d487175b7d`)
    .then(response => response.json())
    .then((data) => setData(data)).finally(() => {setLoad({mainLoad: true, isLoading: false})})
    console.log(data.data)
  }
  

  function handleChange(e) {
    setSearch( e.target.value)
  }

 

    return (
      
      <div className="container">
        <Header handleGetAPi={handleGetAPi} handleChange={handleChange}/>
        {(load.mainLoad) ? <Main isLoading={load.isLoading}><Weather data={data.data} search={search} /><EightDayForecast getkey={key} search={search} /></Main> : <Before />}
      </div>
    );
  
};

export default App;