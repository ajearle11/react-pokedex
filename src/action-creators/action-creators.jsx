export const setStatus = (string) => {
  return (dispatch) => {
    dispatch({
      type: "setStatus",
      payload: string,
    });
  };
};

export const setFilterValue = (string) => {
  return (dispatch) => {
    dispatch({
      type: "setFilterValue",
      payload: string,
    });
  };
};

export const setSearchValue = (string) => {
  return (dispatch) => {
    dispatch({
      type: "setSearchValue",
      payload: string,
    });
  };
};

export const setPokemonData = (object) => {
  return (dispatch) => {
    dispatch({
      type: "setPokemonData",
      payload: object,
    });
  };
};

export const setTempArr = (object) => {
  return (dispatch) => {
    dispatch({
      type: "setTempArr",
      payload: object,
    });
  };
};

export const setfilteredTypeArr = (object) => {
  return (dispatch) => {
    dispatch({
      type: "setfilteredTypeArr",
      payload: object,
    });
  };
};

export const setIsLoading = () => {
  return (dispatch) => {
    dispatch({
      type: "setIsLoading",
    });
  };
};

export const setLoadValue = () => {
  return (dispatch) => {
    dispatch({
      type: "setLoadValue",
    });
  };
};
