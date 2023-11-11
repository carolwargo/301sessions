import React from 'react';
import { motion } from 'framer-motion';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

// Define fadeInAnimation
const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FixedButtons = () => {
  return (
    <div>
      <motion.div
        style={{
          position: 'fixed',
          top: '50%',
          left: '15px', // Adjust the left position as needed
          transform: 'translateY(-50%)',
          zIndex: '1000',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
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
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
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
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
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
          whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
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
      </motion.div>
    </div>
  );
};

export default FixedButtons;
