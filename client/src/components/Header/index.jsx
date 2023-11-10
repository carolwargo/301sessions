import React from 'react';
import { MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import CoverResize from '../../assets/images/CoverResize.png'; 
import './header.css';

//CTA import { Link } from 'react-router-dom';

const Header = () => {
  

  const headerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CoverResize}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    height: '300px', // Adjust the height to your preference
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
                  <MDBCol>
                  <MDBBtn tag='a' href="tel:4437711708" color='none' className='m-2' style={{ color: '#3b5998' }}>
    <MDBIcon icon='phone' size='lg' />
</MDBBtn>



      <MDBBtn tag='a' href='https://twitter.com/301Catching' color='none' className='m-2' style={{ color: '#55acee' }}>
        <MDBIcon fab icon='twitter' size='lg' />
      </MDBBtn>
 

     
      <MDBBtn tag='a' href='mailto:301catching@gmail.com' color='none' className='m-2' style={{ color: '#dd4b39' }}>
    <MDBIcon fab icon='google' size='lg' />
</MDBBtn>


<MDBBtn tag='a' href="https://www.instagram.com/301_catching/" color='none' className='m-2' style={{ color: '#ac2bac' }}>
    <MDBIcon fab icon='instagram' size='lg' />
</MDBBtn>

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