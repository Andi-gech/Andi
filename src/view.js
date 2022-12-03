import React from "react";
import "./app.css";
import { FaEye } from "react-icons/fa";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function View(props) {
  return (
    <div className="View">
      <div>
        <FaEye
          size={170}
          color="
#7b0f66"
        />
      </div>
      <div className="counter">
        <VisibilitySensor>
          {({ isVisible }) => {
            const value = isVisible ? 80 : 0;
            return (
              <h3 className="allcounter">
                <CountUp end={value} />
                <h3>+ Views</h3>
              </h3>
            );
          }}
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default View;
