import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegStar } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";

function VerticalTimelineComp(props) {
  const { addToFavorite, favorited } = useContext(GlobalContext);

  return (
    <div>
      <VerticalTimeline>
        {props.repos.map((repo) => {
          let stored = favorited.find((o) => o.id === repo.id);
          const disable = stored ? true : false;
          return (
            <VerticalTimelineElement
              key={repo.id}
              date={repo.created_at}
              dateClassName="date"
            >
              <button
                className="btn btn-primary"
                disabled={disable}
                onClick={() => addToFavorite(repo)}
              >
                <FaRegStar />
              </button>
              <h3 className="vertical-timeline-element-title">{repo.name}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {repo.language}
              </h5>
              <h5 className="vertical-timeline-element-subtitle">
                {repo.visibility}
              </h5>
              <div>
                <button className="btn btn-light">
                  <a
                    href={repo.html_url}
                    target="blank"
                    className="link-warning"
                  >
                    Visit repository
                  </a>
                </button>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default VerticalTimelineComp;
