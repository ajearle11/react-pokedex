import { Pokecard } from "../index";
import { useState } from "react";

export default function PokeFilter({ setStatus, setFilterValue, filterValue }) {
  function setFilterStatus(e) {
    setStatus(e.target.value);
    setFilterValue("");
  }

  function setFilterValue(e) {
    setFilterValue(e.target.value);
  }

  return (
    <>
      <select onChange={setFilterStatus}>
        <option value="reset">Reset</option>
        <option value="type">Type</option>
        <option value="number">Name</option>
      </select>
      {setStatus === "type" || setStatus === "number" ? (
        <input onchange={setFilterValue} />
      ) : null}
    </>
  );
}
