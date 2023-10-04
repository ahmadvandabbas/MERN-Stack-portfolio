import React from "react";
import "./Menus.css";
import imgProfile from "../../images/profile.jpeg";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";

function Menus({ toggle, lang }) {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={imgProfile} alt="img-profile" />
          </div>
          <div className="nav-items">
            {lang === "eng" ? (
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
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
                  >
                    <FcBusinessContact />
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="nav-item farsi">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
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
                  >
                    <span>تماس با من</span>
                    <FcBusinessContact />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome title="Home" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout title="About" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPortraitMode title="Experince" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="techStack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBiotech title="TechStack" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReadingEbook title="Education" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcVideoProjector title="Projects" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact title="Contact" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menus;
