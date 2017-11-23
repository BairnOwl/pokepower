import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';

import pokemon from './pokemon.json';

import FilteredList from './FilteredList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
            <img src={logo} className="pokeImg" />
            <h1 className="pokeText">Pok&eacute;Power</h1>
        </header>
        <FilteredList items={pokemon} />
      </div>
    );
  }
}

export default App;
