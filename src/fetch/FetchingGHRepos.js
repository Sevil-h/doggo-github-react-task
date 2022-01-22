import React, { useState, useEffect } from "react";
import axios from "axios";
import Timeline from "../components/Timeline/VerticalTimeline";

// Fetching data from github repositories API with axios
function FetchingGHRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sevil-h/repos`)
      .then((res) => {
        const data = res.data;
        // console.log(data);
        setRepos(data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Repositories</h1>
      <Timeline repos={repos} />
    </div>
  );
}

export default FetchingGHRepos;
