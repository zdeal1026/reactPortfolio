import React, { Component } from "react";

import Bio from "./components/bio/bio.js";
import Contact from "./components/contact/contact.js";
import Intro from "./components/intro/intro.js";
import Navbar from "./components/navbar/navbar.js";
import Portfolio from "./components/portfolio/portfolio.js";
//import "./style.scss";
import Carousel from "react-elastic-carousel";
import "./style.css";
import Method from "./method";
import "./App.css";

const breakPoints = [{ width: 1, diploma: 1 }];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />

        <div className="sections">
          <Intro />
          <Bio />
          <Portfolio />
          <Contact />
          <Carousel breakPoints={breakPoints}>
            <div className="carousel">
              <Method>Associattes in Applied Sciences; Radiography</Method>
              <Method>Bachelors of Science; Business Administration</Method>
              <Method>Certificate; Coding Boot Camp</Method>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default App;
