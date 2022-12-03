import React from "react";
import "./app.css";
import {
  CircularProgressbar,
  buildStyles,
  calcColor,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

import "react-circular-progressbar/dist/styles.css";
import Provider from "./progress";

function Skill(props) {
  return (
    <div className="skillbox"  >
      <div className="inside">
        <div>
          <p> python-Django</p>
          <VisibilitySensor>
            {({ isVisible }) => {
              const value = isVisible ? 80 : 0;
              return (
                <CircularProgressbar
                  value={value}
                  text={`${value} % `}
                  circleRatio={
                    0.7
                  } /* Make the circle only 0.7 of the full diameter */
                  styles={{
                    trail: {
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                    },
                    path: {
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                      stroke: "#00FF08",
                      transition: 'stroke-dashoffset 1.5s ease 0s',
                    },
                    text: {
                      fill: "#ddd",
                      fontWeight: "bold",
                    },
                  }}
                  strokeWidth={10}
                />
              );
            }}
          </VisibilitySensor>
        </div>

        <div>
          <p>react</p>
          <VisibilitySensor>
            {({ isVisible }) => {
              const value = isVisible ? 78 : 0;
              return (
                <CircularProgressbar
                  value={value}
                  text={`${value} % `}
                  circleRatio={
                    0.7
                  } /* Make the circle only 0.7 of the full diameter */
                  styles={{
                    trail: {
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                    },
                    path: {
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                      stroke: "#00FF08",
                      transition: 'stroke-dashoffset 2.5s ease 0s',
                    },
                    text: {
                      fill: "#ddd",
                      fontWeight: "bold",
                    },
                  }}
                  strokeWidth={10}
                />
              );
            }}
          </VisibilitySensor>
        </div>
        <div>
          <p>html/css</p>
          <VisibilitySensor>
            {({ isVisible }) => {
              const value = isVisible ? 80 : 0;
              return (
                <CircularProgressbar
                  value={value}
                  text={`${value} % `}
                  circleRatio={
                    0.7
                  } /* Make the circle only 0.7 of the full diameter */
                  styles={{
                    trail: {
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                    },
                    path: {
                      strokeLinecap: "butt",
                      transform: "rotate(-126deg)",
                      transformOrigin: "center center",
                      stroke: "#00FF08",
                      transition: 'stroke-dashoffset 1.5s ease 0s',
                    },
                    text: {
                      fill: "#ddd",
                      fontWeight: "bold",
                    },
                  }}
                  strokeWidth={10}
                />
              );
            }}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
}

export default Skill;
