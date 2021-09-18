import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-scroll";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar" id="navbar">
        <Link
          activeClassName="active"
          to="Intro"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Introduction
        </Link>
        <Link
          activeClassName="active"
          to="Bio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Bio
        </Link>
        <Link
          activeClassName="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          activeClassName="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default Navbar;
