
export const PokemonCards = ({poke}) => { 
    return (
        <li className="pokemon-card">

              <h3>{poke.name}</h3> 
              <figure>
                <img src={poke.sprites.front_default} alt={poke.name} />
              </figure>
        </li>
    );
}