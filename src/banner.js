import React, { useState } from "react";
import Navbars from "./Navbars";
import Header from "./newapp";
import "./app.css";
import Myprofile from "./myprofile";
import Skill from "./skill";
import View from "./view";
import Lottie from "react-lottie";
import Data from "./25059-gray-seagulls (1).json";
import { Animator, ScrollContainer, ScrollPage,ZoomInScrollOut, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Projects from "./projects";
import { useMediaQuery } from 'react-responsive'
import Contact from "./Contact";


function Banner(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const ismobileScreen = useMediaQuery({ query: '(max-width: 600px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
const ZoomInScrollOut = batch(FadeIn(), ZoomIn(),MoveIn());
const FadeUp = batch(Fade(), MoveIn(),);


  return (
    <ScrollContainer>
      <div className="banner">
       
        <Navbars />
      
        

        <h1 className="bannerText ">
          &nbsp; Hello I am <span className="text ">Andi</span>
          <br /> Full Stack Developer
        </h1>

        <div className="birds">
          <Lottie
            options={defaultOptions}
            height={600}
            width={900}
            speed={0.5}
          />
        </div>
      </div>
      <div id='profiles'>
      <ScrollPage>
      {(isDesktopOrLaptop  && (<h1 style={{color:"white",fontFamily:"sans-serif",fontWeight:"bold",marginTop:29,marginLeft:50,fontSize:28}}>Profile</h1>
      ))||   <h1 style={{color:"white",fontFamily:"sans-serif",marginTop:"34%",fontWeight:"bold",marginLeft:50,fontSize:28}}>Skills </h1>
    }
      <Animator animation={ZoomInScrollOut}>
        <Myprofile />
      </Animator>
      </ScrollPage>
      </div>
      <div id='skill'>
      <ScrollPage  >
      {(isDesktopOrLaptop  && (
      <h1 style={{color:"white",fontFamily:"sans-serif",fontWeight:"bold",marginLeft:50,fontSize:28}}>Skills</h1>
     ))||   <h1 style={{color:"white",fontFamily:"sans-serif",marginTop:169,fontWeight:"bold",marginLeft:50,fontSize:28}}>Skills </h1>
    }
      <Animator  animation={MoveIn(-1000, 0)}>
      <Skill />
      </Animator>

    
      
      <View />
      </ScrollPage>
      </div>

      <Projects />
      <Contact />
      </ScrollContainer>
  );
}

export default Banner;
