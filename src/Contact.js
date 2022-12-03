import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
function Contact(props) {
  return (
    <div className="contact">
      <div className="i1">
        <FaFacebook
          size={30}
          color="
white"
        />
      </div>
      <div className="i2">
        <FaInstagram
          size={30}
          color="
white"
        />
      </div>

      <p style={{ color: "white", fontweight: "bold ", marginLeft: 950 }}>
        by Andualem Getachew
      </p>
    </div>
  );
}

export default Contact;
