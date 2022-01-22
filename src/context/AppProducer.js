export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorited: [action.payload, ...state.favorited],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favorited: state.favorited.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
