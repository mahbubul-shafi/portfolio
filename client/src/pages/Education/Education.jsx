import "./Education.css";
import { MdOutlineSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Education = () => {
  return (
    <div className="education" id="education">
      <h2>Education</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2018 - 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineSchool />}
        >
          <h3 className="vertical-timeline-element-title">Computer Science & Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">BSc</h4>
          <p>
            Rajshahi University of Engineering & Technology
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
