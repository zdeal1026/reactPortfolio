import Bio from "./components/bio/bio.js";
import Contact from "./components/contact/contact.js";
import Intro from "./components/intro/intro.js";
import Navbar from "./components/navbar/navbar.js";
import Portfolio from "./components/portfolio/portfolio.js";

function App() {
  return (
    <section>

      <header>
      <Navbar />
      </header>
    
      <article className="block">
      <Intro />
      <Bio />
      </article>
    
      <div>
      <Portfolio />
      </div>
    
      <footer>
      <Contact />
      </footer>
    
   </section>
  );
}

export default App;