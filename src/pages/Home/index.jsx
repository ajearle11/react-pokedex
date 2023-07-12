import { Pokedex, PokeFilter } from "../../components/";
import { React, useState, useEffect } from "react";
import { pokeApiUrl, getReqOptions } from "../../api/api";
import Pokeball from "../../assets/images/Pokeball.png";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("reset");
  const [tempArr, setTempArr] = useState(pokemonData);
  const [filterValue, setFilterValue] = useState("");

  function filterHandler() {
    if (status === "number" && filterValue !== "") {
      setTempArr(pokemonData.filter((item) => item.id === filterValue));
    } else if (status === "type" && filterValue !== "") {
      setTempArr(
        pokemonData.filter((item) =>
          item.types[0].type.name === filterValue || item.types[1]
            ? item.types[1].type.name === filterValue
            : null
        )
      );
    } else {
      setTempArr(pokemonData);
    }
  }

  useEffect(() => {
    filterHandler();
  }, [status, pokemonData]);

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
    setPokemonData([...pokemonData], tempData);
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
          <PokeFilter
            setStatus={setStatus}
            setFilterValue={setFilterValue}
            filterValue={filterValue}
          />
          <Pokedex tempArr={tempArr} pokemonData={pokemonData} />
          <button style={{ zIndex: 1000 }} onClick={loadMore}>
            Load More...
          </button>
        </>
      )}
    </div>
  );
}
