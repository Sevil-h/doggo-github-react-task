import { createStore, combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import counterReducer from "./reducers/counter.reducer";

const reducers = combineReducers({
  counterReducer,
});

const store = createStore(reducers);

export default store;
