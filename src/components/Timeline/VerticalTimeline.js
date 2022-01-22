import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
              <h3 className="vertical-timeline-element-title">{repo.name}</h3>
              <h5 className="vertical-timeline-element-subtitle">
                {repo.language}
              </h5>
              <h5 className="vertical-timeline-element-subtitle">
                {repo.visibility}
              </h5>
              <div>
                <button>
                  <a href={repo.html_url} target="blank">
                    {" "}
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
