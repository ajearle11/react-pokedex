const initialState = { status: "reset" };

const valuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setStatus":
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export default valuesReducer;
