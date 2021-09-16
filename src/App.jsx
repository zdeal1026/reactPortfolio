import Bio from "./components/bio/bio.jsx";
import Contact from "./components/contact/contact.jsx";
import Intro from "./components/intro/intro.jsx";
import Navbar from "./components/navbar/nabar.jsx";
import Portfolio from "./components/portfolio/portfolio.js";

function App() {
  return (
   <Navbar />
   <Intro />
   <Bio />
   <Portfolio />
   <Contact />
  );
}

export default App;
