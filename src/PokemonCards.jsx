
export const PokemonCards = ({poke}) => { 
    return (
        <li className="pokemon-card">

              <h3>{poke.name}</h3> 
              <figure>
                <img 
                className="pokemon-image" 
                // src={poke.sprites.front_default} 
                // src={poke.sprites.other.dream_world.front_default}
                src ={poke.sprites.other.home.front_default}
                // src={poke.sprites.other['official-artwork'].front_default}
                alt={poke.name} />
              </figure>
        </li>
    );
}