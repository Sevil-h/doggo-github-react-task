export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
    default:
      return {
        ...state.action,
        favorited: [action.payload, ...state.favorited],
      };
  }
};