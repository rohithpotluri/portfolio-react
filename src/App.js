import Menu from "./components/menu/menu.js";
import Header from "./components/header/header.js";
import About from "./components/About/About.js";
import Academics from "./components/Academics/Academics.js";
import Skills from "./components/Skills/Skills.js";
import Awards from "./components/awards/awards.js";
import Footer from "./components/footer";

import "./App.css";

<title>Rohith Potluri</title>;
function App() {
  return (
    <div>
      <Menu />
      <Header />
      <About />
      <Academics />
      <Skills />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
