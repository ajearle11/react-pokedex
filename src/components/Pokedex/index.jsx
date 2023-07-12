import { Pokecard } from "../index";
import { useState } from "react";

export default function Pokedex({ pokemonData, tempArr }) {
  return (
    <div className="pokedex">
      {tempArr.map((pokemon, i) => (
        <Pokecard pokemon={pokemon} key={i} />
      ))}
    </div>
  );
}
