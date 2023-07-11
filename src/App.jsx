import { React, useState, useEffect } from "react";
import "./App.css";
import { pokeApiUrl, getReqOptions } from "./api/api";
import { Pokedex } from "./components/";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const grabPokemon = async () => {
      let i = 0;
      while (i < 20) {
        try {
          const response = await fetch(`${pokeApiUrl}/${i + 1}`, getReqOptions);
          const data = await response.json();
          if (response.ok) {
            setPokemonData([...pokemonData], data);
            console.log(pokemonData);
          } else {
            console.log("error");
          }
        } catch (error) {
          throw new Error(error);
        }
        i++;
      }
    };
    grabPokemon();
  }, []);
  return (
    <div>
      <Pokedex pokemonData={pokemonData} />
    </div>
  );
}

export default App;
