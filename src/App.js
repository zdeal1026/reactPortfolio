import Bio from "./components/bio/bio.js";
import Contact from "./components/contact/contact.js";
import Intro from "./components/intro/intro.js";
import Navbar from "./components/navbar/navbar.js";
import Portfolio from "./components/portfolio/portfolio.js";
import "./style.css"

function App() {
  return (
    <div className="app">

      <header className="topbar">
      <Navbar />
      </header>
    
      <article className="block">
      <Intro />
      <Bio />
      </article>
    
      <div>
      <Portfolio />
      <Contact />
      </div>
    
   </div>
  );
}

export default App;