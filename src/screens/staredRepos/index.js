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
      {favorited.length > 0 ? (
        <VerticalTimelineComp repos={repos} />
      ) : (
        <h3 className="repo-card">No repository in your list! Stared some!</h3>
      )}
    </div>
  );
};

export default HomeScreen;
