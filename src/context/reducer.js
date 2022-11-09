export const initialState = {
  search: null,
  windowSize: {innerHeight: window.innerHeight},
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.search,
      };
    case "SET_WINDOW_SIZE":
      return {
        ...state,
        windowSize: action.windowSize,
      };
  }
};
