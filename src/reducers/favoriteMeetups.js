export const favoriteMeetupsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payload);
    case "REMOVE":
      return state.filter((meetup) => meetup.id !== action.payload);
    case "IS_IN":
      return state.some((meetup) => meetup.id === action.payload);
    default:
      return state;
  }
};
