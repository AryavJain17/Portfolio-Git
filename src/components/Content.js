import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import '../styles/Intro.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Content(props) {
useEffect(() => {
  AOS.init({duration:2000},{offset:200});

}, [])

  const windows=window.innerWidth>786;
  return (
    <div className=" bg-black text-white h-[100vh] flex pt-[25vh] pl-10 ">
   <div className="w-[50%]" data-aos="flip-left">
    <img className="w-[90%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl" src={props.src}/>
   </div>
   <div className="flex-col" data-aos="fade-left">
    <h1 className="text-[35px] font-bold mt-3 mb-8">{props.title}</h1>
    <p className="text-[17px] text-gray-400 mb-5">{props.desc}</p>
    <h2 className="text-[25px] font-semibold mb-3">{props.title2}</h2>
    <p className="text-[18px] font-medium ml-5">{props.list}</p>
    <button className="text-black bg-white rounded-xl p-2 mt-3">Open Site</button>
   </div>
   
   </div>
  );
}

export default Content;
