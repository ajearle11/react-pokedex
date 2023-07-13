const initialState = { filterValue: "", searchValue: "" };

const valuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setFilterValue":
      return { ...state, filterValue: action.payload };
    case "setSearchValue":
      return { ...state, searchValue: action.payload };

    default:
      return state;
  }
};

export default valuesReducer;
