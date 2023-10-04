import React from "react";
import { useState } from "react";
import "./Layout.css";
import Home from "../../pages/Home/Home";
import { useTheme } from "../../Context/ThemeContext";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Menus from "../Menus/Menus";

const Layout = ({ lang, langHandler }) => {
  const [theme] = useTheme();
  const [toggle, setToggle] = useState(true);

  const toggleHandler = ({ lang }) => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section ">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            {toggle ? (
              <p onClick={toggleHandler}>
                <MdKeyboardDoubleArrowLeft size={30} />
              </p>
            ) : (
              <p onClick={toggleHandler}>
                <MdKeyboardDoubleArrowRight size={30} />
              </p>
            )}
          </div>
          <Menus toggle={toggle} lang={lang} langHandler={langHandler} />
        </div>

        <div
          className="container-fluid  home"
          style={{ width: "100%", padding: 0 }}
        >
          <div className={theme}>
            <Home toggle={toggle} lang={lang} langHandler={langHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
