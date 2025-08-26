export const PokemonCards = ({ poke }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          // src={poke.sprites.front_default}
          // src={poke.sprites.other.dream_world.front_default}
          src={poke.sprites.other.home.front_default}
          // src={poke.sprites.other['official-artwork'].front_default}
          alt={poke.name}
        />
      </figure>
      <h1 className="pokemon-name">{poke.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {poke.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {poke.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {poke.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {poke.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{poke.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{poke.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {poke.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
};
