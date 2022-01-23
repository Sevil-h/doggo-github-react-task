import "./style.css";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import VerticalTimelineComp from "../../components/Timeline/VerticalTimelineComp";

const HomeScreen = () => {
  const { favorited } = useContext(GlobalContext);
  const repos = favorited;
  console.log(repos);
  return (
    <div className="container">
      <h1 className="title repo-card">Stared Repos</h1>
      <VerticalTimelineComp repos={repos} />
    </div>
  );
};

export default HomeScreen;
