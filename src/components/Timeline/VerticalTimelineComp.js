import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import "../../styles/Timeline.scss";
import "../../styles/Button.scss";

function VerticalTimelineComp(props) {
  const { addToFavorite, removeFromFav, favorited } = useContext(GlobalContext);
  let iconStyle = { background: "#fdc135" };
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
              iconStyle={iconStyle}
            >
              <button
                className="btn fav-button"
                disabled={disable}
                onClick={() =>
                  disable ? removeFromFav(repo) : addToFavorite(repo)
                }
              >
                <span className="fav-button-icons">
                  <FaRegStar className="fav-button__icon" />
                  <FaStar
                    className={
                      disable
                        ? "fav-button__iconOpacity"
                        : "fav-button__iconfav"
                    }
                  />
                </span>
              </button>
              <h3 className="vertical-timeline-element-title">{repo.name}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {repo.language}
              </h5>
              <div className="vertical-timeline-element-derscription">
                <p>{repo.description}</p>
              </div>
              <p className="vertical-timeline-element-subtitle">
                {repo.visibility} repository
              </p>
              <div>
                <a href={repo.html_url} target="blank" className="button-link">
                  Visit repository
                </a>
              </div>
              {disable ? (
                <button
                  className="btn btn-remove"
                  onClick={() => removeFromFav(repo.id)}
                >
                  <div className="btn-remove__items">
                    <FaRegStar className="btn-remove__item btn-remove__icon" />
                    <span className="btn-remove__item">remove</span>
                  </div>
                </button>
              ) : (
                <span></span>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default VerticalTimelineComp;
