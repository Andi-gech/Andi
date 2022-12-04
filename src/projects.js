import React from "react";
import PRO from "./assets/sa.jpg";
import P1 from "./assets/p1.jpg";
import P2 from "./assets/p2.jpg";
import { useMediaQuery } from 'react-responsive'

function Projects(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const ismobileScreen = useMediaQuery({ query: '(max-width: 600px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
    <div className="Project" id='projects' >
      <h1>Working Projects</h1>
      <div>
      {(isDesktopOrLaptop  && (<table>
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
      ))||   <table>
          <tr>
            <th>
              {" "}
              <div className="cards">
                <img src={P1} alt="arge" />
                <p>Instagram clone</p>
              </div>
            </th>
           </tr>
           <tr>
            <td>
              {" "}
              <div className="cards">
                <img src={P2} alt="arge" />
                <p>Question-Answer</p>
              </div>
            </td>
            </tr>
            <tr>
            <td>
              {" "}
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>School Database</p>
              </div>
            </td>
          </tr>
          
        </table>
    }
        
      </div>
    </div>
  );
}

export default Projects;
