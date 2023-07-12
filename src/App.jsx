import { React, useState, useEffect } from "react";
import "./App.css";
import { pokeApiUrl, getReqOptions } from "./api/api";
import { Pokedex, PokeForm } from "./components/";
import Pokeball from "./assets/images/Pokeball.png";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formValue, setFormValue] = useState("");
  let tempData = [];

  const grabPokemon = async () => {
    let i = 0;
    while (i < 10) {
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

  useEffect(() => {
    grabPokemon();
  }, []);

  return (
    <div className="main-container">
      {console.log(isLoading)}
      {isLoading ? (
        <div>
          <img className="pokeball-load" src={Pokeball} />
        </div>
      ) : (
        <>
          <PokeForm
            setFormValue={setFormValue}
            formValue={formValue}
            pokemonData={pokemonData}
            setPokemonData={setPokemonData}
          />
          <Pokedex pokemonData={pokemonData} />
        </>
      )}
    </div>
  );
}

export default App;
