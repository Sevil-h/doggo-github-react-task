import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

// Fetching data from github profile API with axios
function FetchingGHProfile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sevil-h`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <img src={profile.avatar_url} alt="profile" />
      </div>
      <div>
        <h2>name: {profile.name}</h2>
        <p>folowers: {profile.followers}</p>
        <p>following: {profile.following}</p>
        <p>company: {profile.company}</p>
        <p>location: {profile.location}</p>
        <p>public repositoies: {profile.public_repos}</p>
      </div>
    </div>
  );
}

export default FetchingGHProfile;
