import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import "./WorkExp.css";

function WorkExp({ lang }) {
  return (
    <>
      {lang === "eng" ? (
        <div className="container workExp" id="works">
          <h2>Work Experince</h2>
          <hr />
          <div className="vertical text-white ">
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
                icon={MdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  FrontEnd Developer
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Tehran, IR
                </h5>
                <p className="text-success">2021 - 2022 </p>
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
                icon={MdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  Operator Devices
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Karaj, IR
                </h5>
                <p className="text-success">2022 - 2023 </p>
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
                icon={MdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  MERN Stack Developer
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  Tehran, IR
                </h5>
                <p className="text-success">2023 - present </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      ) : (
        <div className="container workExp" id="works">
          <h2>تجربیات کاری</h2>
          <hr />
          <div className="vertical text-white ">
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
                icon={MdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  توسعه دهنده ی فرانت اند
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  تهران-ایران
                </h5>
                <p className="text-success">1399 - 1400 </p>
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
                icon={MdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  اپراتور دستگاه
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  اشتهارد-کرج
                </h5>
                <p className="text-success">1400 - 1401 </p>
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
                icon={MdSchool}
              >
                <h4 className="vertical-timeline-element-title">
                  توسعه دهنده ی فول استک
                </h4>
                <h5 className="vertical-timeline-element-subtitle">
                  تهران-ایران
                </h5>
                <p className="text-success">1401 - در حال حاضر </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkExp;
