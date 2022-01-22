import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegStar } from "react-icons/fa";

function Timeline(props) {
  return (
    <div>
      <VerticalTimeline>
        {props.repos.map((repo) => {
          return (
            <VerticalTimelineElement
              key={repo.id}
              date={repo.created_at}
              dateClassName="date"
            >
              <FaRegStar />
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

export default Timeline;
