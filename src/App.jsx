import { React, useState, useEffect } from "react";
import "./App.css";
import { pokeApiUrl, getReqOptions } from "./api/api";
import { Pokedex } from "./components/";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const grabPokemon = async () => {
      const responseAll = await fetch(pokeApiUrl, getReqOptions);
      const response = await fetch(`${pokeApiUrl}/1`, getReqOptions);
      const data = await responseAll.json();
      const correctData = data.results;

      if (responseAll.ok) {
        setPokemonData(correctData);
        let newData = async (pokemon) => {
          const response2 = await fetch(
            `${pokeApiUrl}/${pokemon}`,
            getReqOptions
          );
          console.log(response2);
        };
        correctData.map((pokemon, i) => {
          newData(i + 1);
        });
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
