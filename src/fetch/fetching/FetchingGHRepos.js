import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalTimelineComp from "../../components/Timeline/VerticalTimelineComp";

// Fetching data from github repositories API with axios
function FetchingGHRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sevil-h/repos`)
      .then((res) => {
        // sorting repositories depend on the created time
        const data = res.data.sort((a, b) =>
          new Date(a.created) < new Date(b.created_at) ? 1 : -1
        );
        setRepos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Date has been formetted as a August 10, 2021
  repos.forEach((repo) => {
    repo.created_at = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(repo.created_at));
  });

  return (
    <div>
      <VerticalTimelineComp repos={repos} />
    </div>
  );
}

export default FetchingGHRepos;
