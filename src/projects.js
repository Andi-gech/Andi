import React from "react";
import PRO from "./assets/sa.jpg";
import P1 from "./assets/p1.jpg";
import P2 from "./assets/p2.jpg";

function Projects(props) {
  return (
    <div className="Project" id='projects' >
      <h1>Working Projects</h1>
      <div>
        <table>
          <tr>
            <th>
              {" "}
              <div className="cards">
                <img src={P1} alt="arge" />
                <p>Instagram clone</p>
              </div>
            </th>
            <th>
              {" "}
              <div className="cards">
                <img src={P2} alt="arge" />
                <p>Question-Answer</p>
              </div>
            </th>
            <th>
              {" "}
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>School Database</p>
              </div>
            </th>
          </tr>
          <tr>
            <td>
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>School Database</p>
              </div>
            </td>
            <td>
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>School Database</p>
              </div>
            </td>
            <td>
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>School Database</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Projects;
