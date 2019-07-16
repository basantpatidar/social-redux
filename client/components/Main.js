import React from "react";
import { Link } from "react-router";

const Main = React.createClass({
  render() {
    return (
      <div>
        <hi>
          <Link to="/">Reduxstagram</Link>
        </hi>
      </div>
    );
  }
});

export default Main;
