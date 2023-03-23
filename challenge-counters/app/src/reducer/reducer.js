export const ACTIONS = {
  ADD: "ADD",
  RESET: "RESET",
};

export const initState = {
  vegetarian: 0,
  halal: 0,
  vegan: 0,
  noGluten: 0,
  anything: 0,
  total: 0,
};

export const menuReducer = (state, action) => {
  const { key, type } = action;
  console.log(action);
  switch (type) {
    case ACTIONS.ADD:
      return { ...state, [key]: state[key] + 1, total: state.total + 1 };
    case ACTIONS.RESET:
      return initState;

    default:
      return state;
  }
};
