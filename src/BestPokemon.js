

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

  export default BestPokemon