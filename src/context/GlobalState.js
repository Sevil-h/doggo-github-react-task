import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppProducer";

const initialState = {
  favorited: localStorage.getItem("favorited")
    ? JSON.parse(localStorage.getItem("favorited"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provide components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorited", JSON.stringify(state.favorited));
  }, [state]);

  //action
  const addToFavorite = (repo) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: repo });
  };

  const removeFromFav = (id) => {
    dispatch({ type: "REMOVE_FROM_FAV", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favorited: state.favorited,
        addToFavorite,
        removeFromFav,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
