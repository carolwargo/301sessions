import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";

const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    };

const Intro = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
          });
        }, []);

  return (
    <div className="p-3 d-flex flex-column align-items-center" id="intro" data-aos= 'fade-up'>
      <h3
        style={{
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
          color: "red",
          textAlign: "center",
        }}
      >
        WELCOME TO 301CATCHING.COM
      </h3>
    <motion.div className="d-flex flex-column align-items-center" id="intro">
    <motion.div className="border-bottom"
     style={{ fontFamily: 'serif'}}
    >
      <motion.p className="text-center"         
      initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
           
          >
        <i>'The premier destination for 
      all things catching, meticulously designed to elevate your training 
      to elite levels. Here, we empower our catchers by instilling a 
      strong foundation that propels them towards excellence. Whether you're 
      a seasoned athlete or just starting your journey, we offer 
      the expertise needed to reach new heights and redefine what it means to excel in the world of
        Catching.'</i>
      </motion.p>
 
    <br></br>
    </motion.div>
   </motion.div>
    </div>
  );
}

export default Intro;