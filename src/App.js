import React from 'react'
import './App.css';
import CaughtPokemon from './components/CaughtPokemon'



const Logo = ()=>{
  let appName = "Pokedex"
  return(
    <header>
      <p>
        {appName}
      </p>
      <h1>Welcome to the Pokedex</h1>  
      <img 
        alt = 'pokedex' 
        src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
      ></img>
    </header>
  );
  };
  
const BestPokemon = ()=>{
  let abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  return(
  <div>
   <p>
    Mi pokemon favorito es Squirtle
  </p>
    <ul>{abilities.map((abilities, index) => {
      return(<li key = {index}>{abilities} {index}</li>)
    })}
    </ul>
  </div>
  )
}
  
  
function App() {
    return (
    <>
    <Logo/>
    <CaughtPokemon/>
    <BestPokemon/>
    </>
  );
}

export default App;
