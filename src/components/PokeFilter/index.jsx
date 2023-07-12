import { Pokecard } from "../index";
import { useState } from "react";

export default function PokeFilter({
  status,
  setStatus,
  setFilterValue,
  filterValue,
  setSearchValue,
  searchValue,
}) {
  function setFilterStatus(e) {
    setStatus(e.target.value);
    setSearchValue("");
    setFilterValue("grass");
  }

  function handleFilterValue(e) {
    setFilterValue(e.target.value);
    setSearchValue("");
  }

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <select style={{ zIndex: 1000 }} onChange={setFilterStatus}>
        <option value="reset">Reset</option>
        <option value="type">Type</option>
      </select>
      <form style={{ zIndex: 1000 }}>
        <input
          style={{ zIndex: 1000 }}
          value={searchValue}
          onChange={handleSearchValue}
        />
      </form>
      {status === "type" ? (
        <select style={{ zIndex: 1000 }} onChange={handleFilterValue}>
          <option value="grass">Grass</option>
          <option value="rock">Rock</option>
          <option value="flying">Flying</option>
          <option value="ground">Ground</option>
          <option value="dark">Dark</option>
          <option value="bug">Bug</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="fighting">Fighting</option>
          <option value="fairy">Fairy</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="dragon">Dragon</option>
          <option value="ice">Ice</option>
          <option value="water">Water</option>
          <option value="steel">Steel</option>
          <option value="normal">Normal</option>
          <option value="ghost">Ghost</option>
        </select>
      ) : null}
    </>
  );
}
