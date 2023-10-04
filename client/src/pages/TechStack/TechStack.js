import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/TechStackList";

function TechStack({ lang }) {
  return (
    <>
      {lang === "eng" ? (
        <div className="container techStack" id="techStack">
          <h2>Technologies Stack</h2>
          <hr />
          <p>
            👉including programming languages, frameworks, databases, frontend
            and backend tools, APIs.
          </p>
        </div>
      ) : (
        <div className="container techStack" id="techStack">
          <h2>مهارت های من</h2>
          <hr />
          <p>
            شامل زبان های برنامه نویسی و فریم ورک ها ,پایگاه داده ها ,ابزار های
            فرانت اند و بک اند می باشد
          </p>
        </div>
      )}

      <div className="row m-auto d-flex  align-items-center justify-content-center container-items-tech  px-5 mt-4 ">
        {TechStackList.map((item) => {
          return (
            <div
              key={item.id}
              className=" col-xl-3 col-md-4 col-sm-8 col-11 mx-4 "
            >
              <div className="card my-3 ms-3 ">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center align-items-center ">
                      <div className="align-self-start ">
                        <item.icon className="tech-icon fs-5" />
                      </div>
                      <div className="media-body ms-1 ">
                        <h5>{item.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TechStack;
