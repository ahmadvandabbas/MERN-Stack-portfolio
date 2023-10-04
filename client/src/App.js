import "./App.css";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import WorkExp from "./pages/Work exp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  const [lang, setLang] = useState("eng");

  const langHandler = () => {
    setLang((prevState) => (prevState === "far" ? "eng" : "far"));
  };
  return (
    <>
      <div className="app">
        <div className="container-lang">
          <button onClick={langHandler}>
            {lang === "eng" ? "far" : "eng"}
          </button>
        </div>
        <MobileNav lang={lang} />
        <Layout lang={lang} />
        <div className={theme}>
          <About lang={lang} />
          <Education lang={lang} />
          <TechStack lang={lang} />
          <Projects lang={lang} />
          <WorkExp lang={lang} />
          <Contact lang={lang} />
        </div>
      </div>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "white", borderRadius: "50%" }}
      />
    </>
  );
}

export default App;
