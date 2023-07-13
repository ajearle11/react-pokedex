import { Pokecard } from "../index";
import { useState, useEffect } from "react";
import { useHome } from "../../contexts";
import { pokeApiUrl, getReqOptions } from "../../api/api";

export default function Pokedex() {
  const { pokemonData, tempArr, setPokemonData } = useHome();
  // console.log(JSON.stringify(tempArr));
  console.log(pokemonData);
  return (
    <>
      <div className="pokedex">
        {tempArr.map((pokemon, i) => (
          <Pokecard pokemon={pokemon} key={i} />
        ))}
      </div>
    </>
  );
}
