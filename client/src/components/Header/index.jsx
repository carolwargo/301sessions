import React from 'react';
import { MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import CoverRed from '../../assets/images/CoverRed.png';

const Header = () => {
  const headerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverRed}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
  };

  const fadeInAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main>
      <header
        className="bg-black text-white mb-4 py-3 display-flex align-center"
        style={headerStyle}
      >
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            className="m-0"
            style={{
              fontSize: '3.5rem',
              textShadow: '2px 2px 4px #ffffff',
            }}
          >
            301_CATCHING
          </motion.h1>
          <br></br>
          <motion.h5
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            style={{ fontFamily: 'icon', paddingRight: '3rem', paddingLeft: '3rem' }}
          >
            {" "}
            The <span style={{ color: 'red' }}> "FOUNDATIONAL EXPERTS" </span> for everything
            catching:
            <br></br>
            Providing Players with the skills to master their craft & elevate their game.
          </motion.h5>
          <div>
            <MDBRow>
              <MDBCol className="d-flex flex-wrap align-items-center justify-content-center ">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <MDBBtn
                    tag="a"
                    href="tel:4437711708"
                    color="none"
                    style={{ color: '#3b5998' }}
                    className="m-2"
                  >
                    <MDBIcon icon="phone" size="lg" />
                  </MDBBtn>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <MDBBtn
                    tag="a"
                    href="https://twitter.com/301Catching"
                    color="none"
                    style={{ color: '#55acee' }}
                    className="m-2"
                  >
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <MDBBtn
                    tag="a"
                    href="mailto:301catching@gmail.com"
                    color="none"
                    style={{ color: '#dd4b39' }}
                    className="m-2"
                  >
                    <MDBIcon fab icon="google" size="lg" />
                  </MDBBtn>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <MDBBtn
                    tag="a"
                    href="https://www.instagram.com/301_catching/"
                    color="none"
                    style={{ color: '#ac2bac' }}
                    className="m-2"
                  >
                    <MDBIcon fab icon="instagram" size="lg" />
                  </MDBBtn>
                </motion.div>
              </MDBCol>
            </MDBRow>

            <MDBCol>
              <br></br>
            </MDBCol>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
