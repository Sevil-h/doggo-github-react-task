import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppProducer";

const initialState = {
  allRepos: [],
  favorited: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provide components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action
  const addToFavorite = (repo) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: repo });
  };

  return (
    <GlobalContext.Provider
      value={{
        allrepos: state.allRepos,
        favorited: state.favorited,
        addToFavorite,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
