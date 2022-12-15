import React from "react";
import PRO from "./assets/no image.jpg";
import P1 from "./assets/p1.jpg";
import P2 from "./assets/p2.jpg";
import p3 from"./assets/dashboard.PNG";

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
              <a href="https://gamersbook.pages.dev/"><div className="cards">
                <img src={p3} alt="arge" />
                <p>gamming dashboard</p>
              </div></a>
            </th>
            <th>
              {" "}
              <a href="https://github.com/Andi-gech/learnfrom"><div className="cards">
                <img src={P2} alt="arge" />
                <p>Question-Answer</p>
              </div></a>
            </th>
            <th>
              {" "}
             <a > <div className="cards">
                <img src={P1} alt="arge" />
                <p>Instagram clone</p>
              </div></a>
            </th>
          </tr>
          <tr>
            <td>
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>Not set</p>
              </div>
            </td>
            <td>
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>Not set</p>
              </div>
            </td>
            <td>
              <div className="cards">
                <img src={PRO} alt="arge" />
                <p>Not set</p>
              </div>
            </td>
          </tr>
        </table>
      ))||   <table>
          <tr>
            <th>
              {" "}
              <a href="https://gamersbook.pages.dev/"><div className="cards">
                <img src={p3} alt="arge" />
                <p>gamming dashboard</p>
              </div></a>
            </th>
           </tr>
           <tr>
            <td>
              {" "}
              <a href="https://github.com/Andi-gech/learnfrom"><div className="cards">
                <img src={P2} alt="arge" />
                <p>Question-Answer</p>
              </div></a>
            </td>
            </tr>
            <tr>
            <td>
              {" "}
              <a > <div className="cards">
                <img src={P1} alt="arge" />
                <p>Instagram clone</p>
              </div></a>
            </td>
          </tr>
          
        </table>
    }
        
      </div>
    </div>
  );
}

export default Projects;
