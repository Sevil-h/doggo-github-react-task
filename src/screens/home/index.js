import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../../store/actions/counter.reducer";
import "./style.scss";
import { FetchingGHProfile } from "../../fetch";
import { FetchingGHRepos } from "../../fetch";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { counterReducer } = useSelector((state) => state);

  const increment = () => dispatch(Increment());
  const decrement = () => dispatch(Decrement());

  return (
    <div className="container">
      <FetchingGHProfile />
      <FetchingGHRepos />
      {/* <h1>{counterReducer.val}</h1>

      <button onClick={decrement}>DECREMENT</button>
      <button onClick={increment}>INCREMENT</button> */}
    </div>
  );
};

export default HomeScreen;
