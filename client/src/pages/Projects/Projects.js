import React from "react";
import "./Projects.css";
import imgProject from "../../images/brand.jpeg";
import imgProject2 from "../../images/webpv.jpg";
import imgProject3 from "../../images/mobile-shop.jpg";

function Projects({ lang }) {
  return (
    <>
      {lang === "eng" ? (
        <div className="container projects" id="projects">
          <h2> Projects</h2>
          <hr />
          <p className="text-center px-5 mx-5">
            👉 In the following section, there are several types of high and
            mighty projects I have. for every used project in that project and
            the images It has been arranged. to see the details of most projects
            and codes. Click projects on a link.
          </p>
          <div className="row mt-5 mb-5" id="ads ">
            <div className="col-xl-5 col-md-6 col-sm-10 col-10 mt-md-5 m-auto cards ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <img src={imgProject} alt="img-projects" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">css</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">bootstrap</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5>WebPro Portfolio Website</h5>
                  </div>
                  <a href="/" className="ad-btn">
                    view
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6  col-sm-10 col-10 mt-md-5 m-auto cards ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FrontEnd</span>
                  <img src={imgProject2} alt="img-projects" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>
                  <span className="card-detail-badge">html</span>
                  <span className="card-detail-badge">css</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5> WebPro Shopping-clothes Application</h5>
                  </div>
                  <a href="/" className="ad-btn">
                    view
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6  col-sm-8 col-10 mt-md-5 m-auto cards  ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MobileApp</span>
                  <img src={imgProject3} alt="img-projects" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Mongo</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5>WebPro Shopping-Mobile Website</h5>
                  </div>
                  <a href="/" className="ad-btn">
                    view
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container projects" id="projects">
          <h2>پروژه ها</h2>
          <hr />
          <p className="text-center px-5 mx-5">
            در بخش زیر چند نمونه از پروژه های با کیفیت و سطح بالای خود را قرار
            داده ام .برای هر پروژه ابزار های استفاده شده در آن پروژه و تصاویر
            مربوطه قرار داده شده است .برای دیدن جزییات بیشتر پروژه ها و کدهای
            پروژه ها بر روی لینک کلیک کنید
          </p>
          <div className="row mt-5 mb-5" id="ads ">
            <div className="col-xl-5 col-md-6  col-sm-8 col-10 mt-md-5 m-auto cards ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">فول استک</span>
                  <img src={imgProject} alt="img-projects" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">bootstrap</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">css</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5>پورتفولیوی شخصی</h5>
                  </div>
                  <a href="/" className="ad-btn">
                    مشاهده
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6  col-sm-8 col-10 mt-md-5 m-auto cards ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">فرانت اند</span>
                  <img src={imgProject2} alt="img-projects" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Redux</span>
                  <span className="card-detail-badge">html</span>
                  <span className="card-detail-badge">css</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5>فروشگاه موبایل</h5>
                  </div>
                  <a href="/" className="ad-btn">
                    مشاهده
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6  col-sm-8 col-10 mt-md-5 m-auto cards ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">فرانت اند</span>
                  <img src={imgProject3} alt="img-projects" />
                </div>
                <div className="card-image-overly m-auto">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Mongo</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5>اپلیکیشن فروشگاهی </h5>
                  </div>
                  <a href="/" className="ad-btn">
                    مشاهده
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
