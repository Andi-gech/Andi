import React, { useEffect, useState } from "react";


import "./app.css";
import { FaEye } from "react-icons/fa";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Axios } from "axios";
import axios from "axios";

function View(props) {
  const [Value,setvalue]=useState([])
    useEffect(()=>{
        axios.get('https://api.countapi.xyz/hit/potfolios.pages.dev/visitors').then(res=>{
            console.log(res.data.value)
            setvalue(res.data.value)
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
