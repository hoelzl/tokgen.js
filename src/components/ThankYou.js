import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      <p>Thank you for using TokGen!</p>
      {props.token ? (
        <p>The generated token is: {props.token}</p>
      ) : (
        <div className="ui spinner">
          <p>Please stand by while the token is generated.</p>
        </div>
      )}
      <Link to="/data">
        <button className="ui button fluid" onClick={props.clearToken}>
          Generate another token
        </button>
      </Link>
    </div>
  );
};

Home.defaultProps = {
  token: undefined
};

export default Home;
