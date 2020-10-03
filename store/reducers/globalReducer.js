const initialState = {
  toggleMenu: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { toggleMenu: true };
    case "CLOSE_MENU":
      return { toggleMenu: false };
    default:
      return state;
  }
};
