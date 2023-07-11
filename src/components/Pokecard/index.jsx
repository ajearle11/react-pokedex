export default function Pokecard({ pokemon }) {
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
    <div className="card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="sprite"
      />
      <h1 className="title">{pokemon.name}</h1>
      {checkTypes(pokemon.types)}
    </div>
  );
}
