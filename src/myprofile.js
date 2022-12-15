import React from "react";
import "./app.css";
import PRO from "./assets/PRO.png";

function Myprofile(props) {
  return (
    <div className="Profile" id="profile212">
      <img src={PRO} alt="arge" />
      <p>
        &nbsp; &nbsp; Hello and welcome to my personal website. I'm Andualem Getachew, to be exact I'm a third-year defense engineering student. Additionally, I'm a student of the Alx Software Engineering Program.
      </p>
    </div>
  );
}

export default Myprofile;
