import React, { useState } from 'react';
import Header from './components/Header';
import Before from './components/Before';
import EightDayForecast from './components/EightDayForecast';
import Weather from './components/Weather';
import Loader from './components/Loader';
import Api_Key from './components/Api_Key';

const App = () => {
  const [search, setSearch] = useState('')
  const [load, setLoad] = useState({ isLoading: true, mainLoad: false,})
  const [data, setData] = useState({})
  
  function handleGetAPi() {
    setLoad({mainLoad: true, isLoading: true})
    fetch(`https://api.weatherbit.io/v2.0/current?city=${search}&key=${Api_Key}`)
    .then(response => response.json())
    .then((data) => setData(data)).finally(() => {setLoad({mainLoad: true, isLoading: false})})
  }
  

  function handleChange(e) {
    setSearch( e.target.value)
  }

  return (
    
    <div className="container">
      <Header handleGetAPi={handleGetAPi} handleChange={handleChange}/>
      {(load.mainLoad) ? <Loader isLoading={load.isLoading}><Weather data={data.data} search={search} /><EightDayForecast search={search} /></Loader> : <Before />}
    </div>
  );
  
};

export default App;