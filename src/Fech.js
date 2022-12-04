import React ,
{useState,useEffect} from "react";
import axios from "axios";

function Contact(props) {
    const [value,setvalue]=useState([])
    useEffect(()=>{
        axios.get('https://api.countapi.xyz/hit/potfolios.pages.dev/visits?callback=cb').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    })
  return (
    <div >
      
    </div>
  );
}

export default Contact;
