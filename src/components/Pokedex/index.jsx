import { Pokecard } from "../index";
import { useState } from "react";

export default function Pokedex({ pokemonData }) {
  const [filterType, setFilterType] = useState("reset");
  const [filterValue, setFilterValue] = useState("");

  // function handleInput(e) {

  // }

  return (
    <div className="pokedex">
      <select>
        <option value="reset">Reset</option>
        <option value="type">Type</option>
        <option value="name">Name</option>
      </select>
      {filterType === "type" || filterType === "name" ? (
        <input onchange={handleInput} />
      ) : null}
      {pokemonData.map((pokemon, i) => (
        <Pokecard pokemon={pokemon} key={i} />
      ))}
    </div>
  );
}
