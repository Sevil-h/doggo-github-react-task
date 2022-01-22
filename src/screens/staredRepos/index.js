import "./style.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const HomeScreen = () => {
  const { favorited } = useContext(GlobalContext);
  return (
    <div>
      <h1>Stared Repos</h1>
    </div>
  );
};

export default HomeScreen;
