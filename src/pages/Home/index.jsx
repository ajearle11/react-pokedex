import { Pokedex } from "../../components/";
import { React, useState, useEffect } from "react";
import { pokeApiUrl, getReqOptions } from "../../api/api";
import Pokeball from "../../assets/images/Pokeball.png";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let tempData = [];

  const grabPokemon = async (i, j) => {
    while (i < j) {
      try {
        const response = await fetch(`${pokeApiUrl}/${i + 1}`, getReqOptions);
        const data = await response.json();
        if (response.ok) {
          tempData.push(data);
        } else {
          console.log("error");
        }
      } catch (error) {
        throw new Error(error);
      }
      i++;
    }
    setPokemonData(tempData);
    setIsLoading(false);
  };

  function loadMore() {
    grabPokemon(pokemonData.length, pokemonData.length + 21);
  }

  useEffect(() => {
    grabPokemon(0, 21);
  }, []);

  return (
    <div className="main-container">
      {isLoading ? (
        <div>
          <img className="pokeball-load" src={Pokeball} />
        </div>
      ) : (
        <>
          <Pokedex pokemonData={pokemonData} grabPokemon={grabPokemon} />
          <button style={{ zIndex: 1000 }} onClick={loadMore}>
            Load More...
          </button>
        </>
      )}
    </div>
  );
}
