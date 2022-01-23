import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { FaMapMarkerAlt, FaBookOpen } from "react-icons/fa";
import "../../styles/ProfileCard.scss";

// Fetching data from github profile API with axios
function FetchingGHProfile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sevil-h`)
      .then((res) => {
        const data = res.data;
        // console.log(data);
        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="profile-card js-profile-cart">
      <div className="profile-card__img-card">
        <img
          className="profile-card__img"
          src={profile.avatar_url}
          alt="profile card"
        />
      </div>
      <div className="profile-card__cnt">
        <div className="profile-card__name">{profile.name}</div>
        <div className="profile-card__loc">
          <span>
            <FaMapMarkerAlt className="profile-card__icon" />
          </span>
          <span className="profile-card__loc-text">{profile.location}</span>
          <p> {!profile.company ? "Le wagon" : profile.company}</p>
        </div>
        <div className="profile-card__info">
          <div className="profile-card__info--item">
            <div className="profile-card__info--title">{profile.following}</div>
            <div>Following</div>
          </div>
          <div className="profile-card__info--item">
            <div className="profile-card__info--title">{profile.followers}</div>
            <div>Followers</div>
          </div>
          <div className="profile-card__info--item">
            <div className="profile-card__info--title">
              {profile.public_repos}
            </div>
            <div>Repositories</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchingGHProfile;
