import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resome.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function Home({ lang }) {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className=" home-container  " id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "dark" ? (
            <BsFillSunFill size={30} />
          ) : (
            <BsFillMoonStarsFill size={30} />
          )}
        </div>
        {lang === "eng" ? (
          <div className="container-fluid home-content ">
            <h2>Hi my friends 🙋‍♂️</h2>
            <h2>I'm Abbas Ahmadvand</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer ! ",
                    "MERN Stack Developer !",
                    "React Native Developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-btn">
              <button className="btn btn-hire">Hire Me</button>
              <a className="btn btn-cv" href={Resume} download={"resume.pdf"}>
                My Resume
              </a>
            </div>
          </div>
        ) : (
          <div className="container-fluid home-content ">
            <h2>به وب سایت من خوش آمدید 🙋‍♂️</h2>
            <h2>من عباس احمدوند هستم</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "توسعه دهنده ی فول استک! ",
                    "توسعه دهنده ی مرن استک !",
                    "توسعه دهنده ی موبایل !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-btn">
              <button className="btn btn-hire">اطلاعات بیشتر</button>
              <a
                className="btn btn-cv"
                href={Resume}
                download={"resume-abbas.pdf"}
              >
                رزومه من
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
