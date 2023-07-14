import { Pokedex, PokeFilter } from "../../components/";
import { React, useState, useEffect } from "react";
import { pokeApiUrl, getReqOptions } from "../../api/api";
import Pokeball from "../../assets/images/Pokeball.png";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../action-creators/";
import { bindActionCreators } from "redux";

export default function Home() {
  const pokemonData = useSelector((state) => state.arrays.pokemonData);
  const isLoading = useSelector((state) => state.load.isLoading);
  const status = useSelector((state) => state.status.status);
  const tempArr = useSelector((state) => state.arrays.tempArr);
  const filterValue = useSelector((state) => state.values.filterValue);
  const searchValue = useSelector((state) => state.values.searchValue);
  const filteredTypeArr = useSelector((state) => state.arrays.filteredTypeArr);
  const dispatch = useDispatch();
  const {
    setStatus,
    setFilterValue,
    setSearchValue,
    setPokemonData,
    setTempArr,
    setFilteredTypeArr,
    setIsLoading,
    setLoadValue,
  } = bindActionCreators(actionCreators, dispatch);

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

    pokemonData.length > 10 ? setIsLoading(false) : null;
  }, [status, pokemonData, filterValue, searchValue]);

  const grabPokemon = async (i, j) => {
    while (i < j) {
      try {
        const response = await fetch(`${pokeApiUrl}/${i + 1}`, getReqOptions);
        const data = await response.json();

        if (response.ok) {
          const pokemon = {
            name: data.name,
            sprites: { front_default: data.sprites.front_default },
            types: [
              { type: { name: data.types[0].type.name } },
              {
                type: {
                  name:
                    data.types.length === 1 ? null : data.types[1].type.name,
                },
              },
            ],
          };
          setPokemonData(pokemon);
        } else {
          console.log("error");
        }
      } catch (error) {
        throw new Error(error);
      }
      i++;
    }
  };

  async function loadMore() {
    setLoadValue();
  }

  useEffect(() => {
    grabPokemon(0, 151);
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
