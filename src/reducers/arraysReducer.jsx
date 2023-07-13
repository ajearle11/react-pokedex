const initialState = { pokemonData: [], tempArr: [], filteredTypeArr: [] };

const arraysReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setPokemonData":
      return { ...state, pokemonData: [...state.pokemonData, action.payload] };
    case "setTempArr":
      return { ...state, tempArr: [...state.tempArr, action.payload] };
    case "setfilteredTypeArr":
      return {
        ...state,
        filteredTypeArr: [...state.filteredTypeArr, action.payload],
      };
    default:
      return state;
  }
};

export default arraysReducer;
