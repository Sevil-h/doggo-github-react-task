import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingGHRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sevil-h/repos`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setRepos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
}

export default FetchingGHRepos;
