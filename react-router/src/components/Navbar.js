import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="ui raised very padded segment">
        <a className="ui teal inverted segment" href="/">
          REACT.JS
        </a>
        <div className="ui right floated header">
          <button className="ui button">
            <Link to="/">Home</Link>
          </button>
          <button className="ui button">
            <Link to="/about">About</Link>
          </button>
          <button className="ui button">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
