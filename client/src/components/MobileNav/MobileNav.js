import { useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";

function MobileNav({ lang }) {
  const [open, setOpen] = useState(true);

  const handleOpenMobileNave = () => {
    setOpen(!open);
  };
  const handleCloseMobileNave = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpenMobileNave}
            />
          ) : (
            <AiOutlineClose
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpenMobileNave}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>

        {lang === "eng" ? (
          <div className="mobile-nav-menu">
            <div
              className="nav-item"
              style={open ? { display: "none" } : { display: "block" }}
            >
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <FcHome />
                  <span>Home</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <FcAbout />
                  <span>About</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <FcPortraitMode />
                  <span>Work Experince</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <FcBiotech />
                  <span>Tech Stack</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <FcReadingEbook />
                  <span> Education</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <FcVideoProjector />
                  <span> Projects</span>
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <FcBusinessContact />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="mobile-nav-menu-farsi">
            <div
              className="nav-item"
              style={open ? { display: "none" } : { display: "block" }}
            >
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <span>صفحه اصلی</span>
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <span>درباره من</span>
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <span>تجربیات کاری</span>
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <span>مهارت ها</span>
                  <FcBiotech />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <span> تحصیلات</span>
                  <FcReadingEbook />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <span> پروژه ها</span>
                  <FcVideoProjector />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleCloseMobileNave}
                >
                  <span>تماس با من</span>
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNav;
