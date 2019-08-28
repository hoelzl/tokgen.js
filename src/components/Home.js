import React from "react";
import HeroBar from "./HeroBar";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <HeroBar>TokGen</HeroBar>;
      <Link to="/data">
        <button className="ui button fluid">Enter Data</button>
      </Link>
    </div>
  );
};

export default Home;
