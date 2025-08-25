import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchPokemon = async()=>{
        try{
           const res = await fetch(API);
           const data = await res.json();
        //    console.log("Fetched data:", data);

        const detailedPokemonData = data.results.map(async(currPokemon)=>{
            const res = await fetch(currPokemon.url);
            const data = await res.json();
            return data;
        });

        const detailedRespones = await Promise.all(detailedPokemonData);
        setPokemon(detailedRespones);
        setLoading(false);

        console.log("Detailed Pokemon Data:", detailedRespones);
        }catch(error){
            console.log("Error while fetching the data", error);
            setLoading(false);
            setError(error);
        }       
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    if(loading){
        return (
        <h1>Loading...</h1>
        )
    }
    if(error){
        return (
        <h1>{error.message}.</h1>
        )
    }

  return (
    <section className="container">
    <header>
        <h1>Pokemon Club</h1>
    </header>
      
      <ul className="cards">
        {
            pokemon.map((poke)=>{
                return (
                    <PokemonCards key={poke.id} poke={poke}/>
            );
        })}
      </ul>
    </section>
  );
}