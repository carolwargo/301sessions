import React from 'react';
import { MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {motion} from 'framer-motion';
import CoverResize from '../../assets/images/CoverResize.png'; 


//CTA import { Link } from 'react-router-dom';

const Header = () => {
  

  const headerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverResize}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white', height: '300px', // Adjust the height to your preference
    display: 'flex',
    alignItems: 'center',
  };
 
  return (
    <main>
    <header className="bg-black text-white mb-4 py-3 display-flex align-center"
            style={headerStyle}>
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          <h1 className="m-0" style={{ fontSize: '3.5rem',  textShadow: "2px 2px 4px #ffffff"
 }}>
            301_CATCHING
          </h1>
          <br></br>
        <h5 style={{ fontFamily: "icon", paddingRight:'3rem', paddingLeft:'3rem' }}>
                {" "}
                The <span style={{color:"red"}}>
                  {" "}
                  "FOUNDATIONAL EXPERTS"
                </span>{" "}
                for everything catching:
                <br></br>
                
                Providing Players with the skills to master their craft &
                elevate their game.
            
                </h5>
                <br></br>
                <div>
                    
                <MDBRow>
  <MDBCol className="d-flex flex-wrap align-items-center justify-content-center ">
    <motion.div whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}>
      <MDBBtn tag='a' href="tel:4437711708" color='none' style={{ color: '#3b5998' }} className='m-2'>
        <MDBIcon icon='phone' size='lg' />
      </MDBBtn>
    </motion.div>

    <motion.div whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}>
      <MDBBtn tag='a' href='https://twitter.com/301Catching' color='none' style={{ color: '#55acee' }}  className='m-2'>
        <MDBIcon fab icon='twitter' size='lg' />
      </MDBBtn>
    </motion.div>

    <motion.div whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}>
      <MDBBtn tag='a' href='mailto:301catching@gmail.com' color='none' style={{ color: '#dd4b39' }}  className='m-2'>
        <MDBIcon fab icon='google' size='lg' />
      </MDBBtn>
    </motion.div>

    <motion.div whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}>
      <MDBBtn tag='a' href="https://www.instagram.com/301_catching/" color='none' style={{ color: '#ac2bac' }}  className='m-2'>
        <MDBIcon fab icon='instagram' size='lg' />
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