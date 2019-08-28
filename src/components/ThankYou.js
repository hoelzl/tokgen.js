import React from "react";
import { Link } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

const Home = props => {
  return (
    <div>
      <Dimmer active={!props.token}>
        <Loader active={!props.token}>Generating a token</Loader>
      </Dimmer>
      <p>Thank you for using TokGen!</p>
      {props.token ? (
        <p>The generated token is: {props.token}</p>
      ) : (
        <p>Please stand by while the token is generated.</p>
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
