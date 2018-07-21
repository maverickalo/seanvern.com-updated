import React from "react";
import { Header } from "./Heading.style";
import { Link } from "react-router-dom";

const Heading = props => {
  return (
    <Header>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>{props.topHeadingText || "Default"}</h1>
        <h1>{props.bottomHeadingText || "Default"}</h1>
      </Link>
    </Header>
  );
};

export default Heading;
