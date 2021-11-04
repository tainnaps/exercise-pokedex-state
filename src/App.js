import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((previousState) => {
      return previousState.index === (pokemons.length - 1) ? {  index: 0 } : {  index: previousState.index + 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={pokemons[this.state.index]} />
        <button onClick={this.handleClick} className="next-btn">Próximo</button>
      </div>
    );
  }
}

export default App;