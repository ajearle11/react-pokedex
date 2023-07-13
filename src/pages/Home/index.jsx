import { Pokedex, PokeFilter } from "../../components/";
import { React, useState, useEffect } from "react";
import { pokeApiUrl, getReqOptions } from "../../api/api";
import Pokeball from "../../assets/images/Pokeball.png";
import { useHome } from "../../contexts";

export default function Home() {
  const {
    pokemonData,
    setPokemonData,
    isLoading,
    setIsLoading,
    status,
    setStatus,
    tempArr,
    setTempArr,
    filterValue,
    setFilterValue,
    searchValue,
    setSearchValue,
    filteredTypeArr,
    setFilteredTypeArr,
  } = useHome();

  function filterHandler() {
    if (searchValue !== "" && status === "type") {
      setFilteredTypeArr(
        pokemonData.filter((item) => item.name.includes(searchValue))
      );

      setTempArr(
        filteredTypeArr.filter(
          (item) =>
            item.types[0].type.name === filterValue ||
            (item.types[1] !== undefined
              ? item.types[1].type.name === filterValue
              : null)
        )
      );
    } else if (searchValue !== "") {
      setTempArr(pokemonData.filter((item) => item.name.includes(searchValue)));
    } else if (status === "type" && filterValue !== "") {
      setTempArr(
        pokemonData.filter(
          (item) =>
            item.types[0].type.name === filterValue ||
            (item.types[1] !== undefined
              ? item.types[1].type.name === filterValue
              : null)
        )
      );
    } else {
      setTempArr(pokemonData);
    }
  }

  useEffect(() => {
    filterHandler();
  }, [status, pokemonData, filterValue, searchValue]);

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

  let extraData = pokemonData;

  async function loadMore() {
    let i = pokemonData.length;
    let j = pokemonData.length + 20;
    while (i < j) {
      try {
        const response = await fetch(`${pokeApiUrl}/${i + 1}`, getReqOptions);
        const data = await response.json();
        if (response.ok) {
          extraData.push(data);
        } else {
          console.log("error");
        }
      } catch (error) {
        throw new Error(error);
      }
      i++;
    }
    setPokemonData(extraData);
  }

  useEffect(() => {
    if (pokemonData.length > 15) {
      null;
    } else {
      grabPokemon(0, 20);
    }
  }, []);

  return (
    <div className="main-container">
      {isLoading ? (
        <div>
          <img className="pokeball-load" src={Pokeball} />
        </div>
      ) : (
        <>
          <PokeFilter />
          <Pokedex />
          <button className="load-btn" onClick={loadMore}>
            Load More...
          </button>
        </>
      )}
    </div>
  );
}
