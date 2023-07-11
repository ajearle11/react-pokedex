import { React, useState, useEffect } from "react";
import "./App.css";
import { pokeApiUrl, getReqOptions } from "./api/api";
import { Pokedex } from "./components/";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const grabPokemon = async () => {
      const response = await fetch(pokeApiUrl, getReqOptions);
      const data = await response.json();
      const correctData = data.results;

      if (response.ok) {
        setPokemonData(correctData);
        console.log(correctData);
      } else {
        console.log("error");
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
