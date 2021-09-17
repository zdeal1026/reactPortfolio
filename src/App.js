import Bio from "./components/bio/bio.jsx";
import Contact from "./components/contact/contact.jsx";
import Intro from "./components/intro/intro.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
import "./style.scss"

function App() {
  return (
    <div className="app">

      <Navbar />
    
      <div className="sections">
      <Intro />
      <Bio />
      <Portfolio />
      <Contact />
      </div>
    
   </div>
  );
}

export default App;