import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/gaming.jpg";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Slazyo's world </h1>
        <p>......</p>
        <Link to="/video">
          <button> EXPLORE </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
// import BannerImage from "../assets/gaming.jpg";