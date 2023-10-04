import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { IoMdSchool } from "react-icons/io";

function Education({ lang }) {
  return (
    <>
      {lang === "eng" ? (
        <div className=" container education" id="education">
          <h2>Education Details</h2>
          <hr />
          <div className="vertical text-white">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "white",

                  color: "black",
                }}
                contentArrowStyle={{ borderRight: "11px solid white" }}
                iconStyle={{
                  background: "white",
                  color: "black",
                  border: "2px solid black",
                }}
                icon={IoMdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  Middle - point
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Hamedan, IR
                </h5>
                <p className="muted ">2006 - 2009 </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "white",
                  color: "black",
                }}
                contentArrowStyle={{ borderRight: "11px solid white" }}
                iconStyle={{
                  background: "white",
                  color: "black",
                  border: "2px solid black",
                }}
                icon={IoMdSchool}
              >
                <h4 className="vertical-timeline-element-title">High school</h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Hamedan, IR
                </h5>
                <p className="muted">2009 - 2012 </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "white",
                  color: "black",
                }}
                contentArrowStyle={{ borderRight: "11px solid white" }}
                iconStyle={{
                  background: "white",
                  color: "black",
                  border: "2px solid black",
                }}
                icon={IoMdSchool}
              >
                <h4 className="vertical-timeline-element-title">College</h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Hamedan, IR
                </h5>
                <p className="muted">2013 - 2018 </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      ) : (
        <div className=" container education" id="education">
          <h2>تحصیلات</h2>
          <hr />
          <div className="vertical text-white">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "white",

                  color: "black",
                }}
                contentArrowStyle={{ borderRight: "11px solid white" }}
                iconStyle={{
                  background: "white",
                  color: "black",
                  border: "2px solid black",
                }}
                icon={IoMdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  مقطع راهنمایی
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  تویسرکان (همدان)
                </h5>
                <p className="muted ">1385 - 1388 </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "white",
                  color: "black",
                }}
                contentArrowStyle={{ borderRight: "11px solid white" }}
                iconStyle={{
                  background: "white",
                  color: "black",
                  border: "2px solid black",
                }}
                icon={IoMdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  مقطع دبیرستان
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  تویسرکان (همدان)
                </h5>
                <p className="muted">1388 - 1391 </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "white",
                  color: "black",
                }}
                contentArrowStyle={{ borderRight: "11px solid white" }}
                iconStyle={{
                  background: "white",
                  color: "black",
                  border: "2px solid black",
                }}
                icon={IoMdSchool}
              >
                <h4 className="vertical-timeline-element-title">دانشگاه </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  آزاد واحد تویسرکان
                </h5>
                <p className="muted">1392 - 1397 </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      )}
    </>
  );
}

export default Education;
