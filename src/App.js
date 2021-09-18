import Bio from "./components/bio/bio.jsx";
import Contact from "./components/contact/contact.jsx";
import Intro from "./components/intro/intro.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import "./style.scss";
import Carousel from "react-elastic-carousel";
import "./style.css";
import Method from "./method";

const breakPoints = [{ width: 1, diploma: 1 }];

function App() {
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

export default App;
