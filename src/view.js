import React, { useEffect, useState } from "react";


import "./app.css";
import { FaEye } from "react-icons/fa";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Axios } from "axios";
import axios from "axios";

function View(props) {
  const [Value,setvalue]=useState([])
  const [text,settext]=useState([])

    useEffect(()=>{
        axios.get('https://api.countapi.xyz/hit/potfolios.pages.dev/visitors').then(res=>{
            console.log(res.data.value)
            if (res.data.value >=1000 && 999999>res.data.value) {
              const ans=res.data.value/10
              setvalue(ans)
              settext(<h4 style={{fontSize:45,marginTop:-15}}>K</h4>)

              
            } else {

               setvalue(res.data.value)
            }
            
           
              }).catch(err=>{
            console.log(err)
        })
    },[])
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
            const value = isVisible ? Value : 0;
            return (
              <h3 className="allcounter">
                <CountUp end={value} />
                <h3 style={{display:"inline-flex",marginRight:6}}>{text}&nbsp;&nbsp;+views</h3>
              </h3>
            );
          }}
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default View;
