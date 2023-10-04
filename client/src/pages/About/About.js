import React from "react";
import "./About.css";
import AboutImage from "../../images/image5.jpg";

function About({ lang }) {
  return (
    <>
      {lang === "eng" ? (
        <div className="container container-about" id="about ">
          <div className="row about ">
            <div className="col-xl-7 col-md-6  about-text">
              <h2>About Me</h2>
              <p>
                Hello, I " m Abbas Ahmadvand, 28 years old from Tehran. An Web
                developer who spends most of his time on the back of my laptop.
                I need practice to keep the blood going. Quality, speed, and
                satisfaction are the priority. I love programming and I spare a
                lot of time to learn.I share everything I know and all I learn
                on this Web site with you. For … Ask your questions and ideas,
                you can communicate with me in the social sector.
              </p>
            </div>
            <div className="col-xl-5 col-md-6  about-img ">
              <div className="img-container">
                <img src={AboutImage} alt="img-about" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container container-about" id="about ">
          <div className="row about ">
            <div className="col-xl-7 col-md-6  about-text">
              <h2>درباره من</h2>
              <p className="align-center">
                سلام من عباس احمدوند هستم 28 ساله و اهل تهران هستم .یک توسعه
                دهنده ی وب که بیشتر وقت خود را پشت صفحه ی لپ تاپم می گذرانم.من
                برای ادامه ی جریان خون به تمرین نیاز دارم .کیفیت ,سرعت,رضایت
                مشتری در اولویت کار من است.من عاشق برنامه نویسی هستم و برای
                یادگیری وقت زیادی را اختصاص می دهم .من هر آنچه که بلدم و هر آنچه
                که یاد میگیرم را در این وب سایت با شما به اشتراک میگذارم .برای
                پرسیدن سوالات و نظرات خود می توانید در بخش تماس با من با من
                ارتباط برقرار کنید.
              </p>
            </div>
            <div className="col-xl-5 col-md-6  about-img ">
              <div className="img-container ">
                <img src={AboutImage} alt="img-about" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
