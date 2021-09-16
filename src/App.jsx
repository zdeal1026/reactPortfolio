import Bio from "./components/bio/bio.jsx";
import Contact from "./components/contact/contact.jsx";
import Intro from "./components/intro/intro.jsx";
import Navbar from "./components/navbar/nabar.jsx";
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
