

const Logo = (props)=>{
    return(
      <header>
        <p>
          {props.name}
        </p>
        <h1>Welcome to the {props.name}</h1>  
        <img 
          alt = {props.name} 
          src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
        ></img>
      </header>
    );
    };

    export default Logo