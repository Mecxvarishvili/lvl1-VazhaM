/* import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleGetAPi = this.handleGetAPi.bind(this)
    this.state = {search: '', name: ''}
  }


  handleGetAPi() {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${this.state.search}&key=093fb9af2a9f4d5793185681c533f38a&include=minutely`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((city_name) => this.setState({data: city_name}))
  }

  handleChange(e) {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <div className="container">
        <Header handleGetAPi={this.handleGetAPi} search={this.state.search} handleChange={this.handleChange}/>
        <Main />
          <header>
            <input  value={this.state.search}  onChange={this.handleChange}/>
            <button onClick={this.handleGetAPi}>Search</button>
          </header>
          <main></main>
      </div>
    );
  }
};

export default App; */

import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState()
  
  function handleGetAPi() {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${search}&key=093fb9af2a9f4d5793185681c533f38a`)
    .then(response => response.json())
    .then((data) => console.log(data))
    .then((data) => setData(data))
  }
  

  function handleChange(e) {
    setSearch( e.target.value)
  }

  return (
    <div className="container">
      <Header handleGetAPi={handleGetAPi} handleChange={handleChange}/>
      <Main />
    </div>
  );
};

export default App;