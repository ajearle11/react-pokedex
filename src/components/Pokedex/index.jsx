import { Pokecard } from "../index";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../action-creators/";
import { bindActionCreators } from "redux";
import { pokeApiUrl, getReqOptions } from "../../api/api";

export default function Pokedex() {
  const pokemonData = useSelector((state) => state.arrays.pokemonData);
  const tempArr = useSelector((state) => state.arrays.tempArr);
  const loadValue = useSelector((state) => state.load.loadValue);
  const dispatch = useDispatch();
  const { setPokemonData, setIsLoading } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <>
      <div className="pokedex">
        {tempArr.map((pokemon, i) =>
          i > loadValue ? null : <Pokecard pokemon={pokemon} key={i} />
        )}
      </div>
    </>
  );
}
