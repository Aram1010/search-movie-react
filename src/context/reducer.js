export const initialState = {
  search: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.search,
      };
  }
};
