import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import '../styles/Intro.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer(props) {
useEffect(() => {
  AOS.init({duration:2000},{offset:200});

}, [])

  const windows=window.innerWidth>786;
  return (
  <>
  <div className="bg-black text-white">
  <h1 className="text-center text-[50px] font-bold pb-[100px]" data-aos="fade-down"> Connect with Me</h1>
  </div>
  </>
  );
}

export default Footer;
