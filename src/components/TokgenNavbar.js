import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const TokgenNavbar = props => {
  return (
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item name="home" active={props.currentPath === "/"} />
      </Link>
      <Link to="/data">
        <Menu.Item name="enter-data" active={props.currentPath === "/data"} />
      </Link>
    </Menu>
  );
};

export default TokgenNavbar;
