import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div className="home-header-right">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt=""
        />
        <div className="home-input-container">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
