import React, { useEffect } from 'react';
import { MDBBtn} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Cover from '../../assets/images/Cover.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const scrollToSection = () => {
  const section = document.getElementById('sessions');
  section.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
  useEffect(() => {
    AOS.init({
      // Add specific AOS configuration for Header here
      duration: 800,
      offset: 50,
      easing: 'ease-in-out',
      once: true,
    });

    // Clean up AOS instance after it's used for Header
    return () => {
      AOS.refresh();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const headerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Cover}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
  };

  const fadeInAnimation = {
    hidden: { opacity: 10, x: -10 },
    visible: { opacity: 10, x: -1 },
  };

  return (
    <main>
      <Container>
      <header
        className="bg-black text-white py-3 display-flex align-center "
        style={headerStyle}
        data-aos="fade-up" // Add AOS data attribute for fade-up animation
      >
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            className="m-0 "
            style={{
              fontSize: '3rem',
              textShadow: '2px 2px 4px #ffffff',
              fontFamily: 'icon',
            }}
          >
           301 CATCHING
          </motion.h1>
        
          <motion.h5
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            style={{ fontFamily: 'monospace', paddingRight: '3rem', paddingLeft: '3rem' }}
          >
            {" "}
            The <span style={{ color: 'red' }}><i> "FOUNDATIONAL EXPERTS" </i></span> for everything
            catching:
        
            Providing Players with the skills to master their craft & elevate their game.
          </motion.h5>
          <br></br>
        <Container  className='pl-5 pr-5'>
          <p >CLICK TO EXPLORE WINTER SESSIONS!</p>
     </Container>
   
<Link to="/#sessions">

  <MDBBtn className='me-1' color='warning' onClick={scrollToSection}> 
    Sessions Signup
  </MDBBtn>
</Link>

        </div>
      </header>
      </Container>
    </main>
  );
};

export default Header;
