import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import '../styles/Intro.css';
import Content from "./Content";


function Intro() {
  const [prod, setProd] = useState([]);
  const [scroll, setscroll] = useState(0);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setscroll(1); // Change the background color to black
      } else {
        setscroll(0); // Change it back to transparent
      }
    };
   
   
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const windows=window.innerWidth>786;
  return (
    <div className=" bg-black text-white h-[100vh]"  >

      <div className="">
        <div className="">
            <div className=" flex">
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: "-10vw" }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              
              <div className=" ml-[100px] text-[100px] pt-[20vh]">
                <div className="mb-5">
                I create 
                </div>
                <span>
                <div className="div1 text-white ml-[500px] -mt-[80px]">
    <h1 className="hmain">playful</h1>
</div></span>
<div className="-mt-[70px]">experiences</div>
<p className=" text-2xl ml-2 mt-4">Aryav Jain/Full Stack Developer</p>
              </div>
              </motion.div>
          </motion.div>
              <motion.div
            animate={{ x: 400 }}
            initial={{ x: "50vw" }}
            transition={{ duration: 1 }}
          >
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
                 <div className="pt-[20vh]">
                <img src="https://c0mpli.github.io/personalwebsite/static/media/personIcon.396ef378ca75af71485d.png"/>
              </div>
                
                </motion.div>
             </motion.div>
             </div>
              <div className="">
              
                <motion.div className="quo3 mt-10"
          style={{textAlign:"center" ,fontSize:"2rem" ,marginTop:"100px", animationFillMode:"backwards"}}
            animate={{ y: "25px" ,opacity: "1" }}
            initial={{ y: "-25px" ,opacity:0 }}
            transition={{  type: "spring", // Use spring animation
            stiffness: 100, // Stiffness of the spring
            damping: 20, duration: 2 ,delay:1 ,  repeat: "infinite" }}
            > Scroll Down <br/> ↡
            </motion.div>
              </div>
              
        
         

            
        </div>
      </div>

     
    </div>
  );
}

export default Intro;
