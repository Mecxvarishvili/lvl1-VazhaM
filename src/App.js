import React, { useState } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import Main from './components/Main';
import Before from './components/Before';

const App = () => {
  const [search, setSearch] = useState('')
  const [load, setLoad] = useState({ isLoading: true, mainLoad: false,})
  const [data, setData] = useState({})

  
  function handleGetApi() {
    setLoad({mainLoad: true, isLoading: true})
    fetch(`https://itunes.apple.com/search?term=${search}`)
    .then(response => response.json())
    .then((data) => {setData(data)}).finally(() => {setLoad({mainLoad: true, isLoading: false})})
  }
  

  function handleChange(e) {
    setSearch( e.target.value)
  }

  return (
    
    <div className="container">
            <Header handleGetApi={handleGetApi} handleChange={handleChange}/>
            {(load.mainLoad) ? <Loader isLoading={load.isLoading}><Main data={data.results} error={data.resultCount} /></Loader> : <Before />}
    </div>
  )
};

export default App;