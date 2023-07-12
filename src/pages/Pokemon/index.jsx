import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pokeApiUrl, getReqOptions } from "../../api/api";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    const response = await fetch(`${pokeApiUrl}/${id}`, getReqOptions);
    const pokemon = await response.json();
    setPokemon(pokemon);
  }

  function checkTypes(types) {
    if (pokemon.types.length === 1) {
      return (
        <div className="types">
          <h1 className={types[0].type.name}>{types[0].type.name}</h1>
        </div>
      );
    } else {
      return (
        <div className="types">
          <h1 className={types[0].type.name}>{types[0].type.name}</h1>
          <h1 className={types[1].type.name}>{types[1].type.name}</h1>
        </div>
      );
    }
  }

  return (
    <div className="pokemon-container">
      <h1 className="pokemon-name">{pokemon.name}</h1>;
      <h2 className="pokemon-id">{pokemon.id}</h2>
      {pokemon.sprites ? (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="sprite"
        />
      ) : (
        "Loading"
      )}
      {pokemon.types ? checkTypes(pokemon.types) : "Loading"}
    </div>
  );
}
