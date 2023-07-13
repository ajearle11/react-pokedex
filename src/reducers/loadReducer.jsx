const initialState = { isLoading: true, loadValue: 20 };

const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setIsLoading":
      return { ...state, isLoading: !state.isLoading };
    case "setLoadValue":
      return { ...state, loadValue: state.loadValue + 21 };
    default:
      return state;
  }
};

export default loadReducer;
