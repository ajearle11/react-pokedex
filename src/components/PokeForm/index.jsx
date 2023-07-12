import { useState } from "react";
import { pokeApiUrl, getReqOptions } from "../../api/api";

export default function PokeForm({
  setFormValue,
  formValue,
  pokemonData,
  setPokemonData,
}) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    grabOnePoke(formValue);
    setFormValue("");
  }

  function checkName(name) {
    return pokemonData.some(function (check) {
      return check.name === name;
    });
  }
  async function grabOnePoke(value) {
    try {
      const nameCheck = checkName(value);

      if (nameCheck) {
        setText(`You cannot add two of the same Pokemon`);
      } else {
        const response = await fetch(`${pokeApiUrl}/${value}`, getReqOptions);
        const data = await response.json();
        if (response.ok) {
          setPokemonData([...pokemonData, data]);
          setText(`Successfully added ${value}`);
        }
      }
    } catch (error) {
      setText(`There was a problem fetching your pokemon`);
      throw new Error(error);
    }
  }

  function handleInput(e) {
    setFormValue(e.target.value);
  }

  return (
    <>
      <form className="uppermost" onSubmit={handleSubmit}>
        <input
          type="text"
          className="poke-form"
          value={formValue}
          onChange={handleInput}
        />
        <button className="form-button" type="submit">
          Add Pokemon
        </button>
      </form>
      <p
        className="second-uppermost"
        style={{
          color:
            text === "There was a problem fetching your pokemon" ||
            text === "You cannot add two of the same Pokemon"
              ? "red"
              : "green",
        }}
      >
        {text}
      </p>
    </>
  );
}
