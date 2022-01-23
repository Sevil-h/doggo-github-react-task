import "../../styles/RepoCard.scss";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import VerticalTimelineComp from "../../components/Timeline/VerticalTimelineComp";

const HomeScreen = () => {
  const { favorited } = useContext(GlobalContext);
  const repos = favorited;
  return (
    <div className="container">
      <h1 className="title repo-card">Stared Repos</h1>
      <VerticalTimelineComp repos={repos} />
    </div>
  );
};

export default HomeScreen;
