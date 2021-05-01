import React from 'react'
import './App.css';
import CaughtPokemon from './components/CaughtPokemon'
import Logo from './Logo'
import BestPokemon from './BestPokemon'

  
  
function App() {
    return (
    <>
    <Logo name = "pokedex"/>
    <CaughtPokemon/>
    <BestPokemon/>
    </>
  );
}

export default App;
