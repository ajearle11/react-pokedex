import { Pokecard } from "../Pokecard";

export default function Pokedex({ pokemonData }) {
  return (
    <div className="pokedex">
      {pokemonData.map((pokemon, i) => (
        <Pokecard pokemon={pokemon} key={i} />
      ))}
    </div>
  );
}
