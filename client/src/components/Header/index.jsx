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
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            301_CATCHING
          </h1>
        <h4 style={{ fontFamily: "icon" }}>
                {" "}
                The <span style={{color:"red"}}>
                  {" "}
                  "FOUNDATIONAL EXPERTS"
                </span>{" "}
                for everything catching:
                <br></br>
              
                Providing Players with the skills to master their craft &
                elevate their game.
            
                </h4>
                <div>
                <MDBRow>
                  <MDBCol>
      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
        <MDBIcon fab icon='facebook-f' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
        <MDBIcon fab icon='twitter' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
        <MDBIcon fab icon='google' size='lg' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
        <MDBIcon fab icon='instagram' size='lg' />
      </MDBBtn>
      </MDBCol>
    </MDBRow>



  {/* 
                  <MDBCol>
     <br></br>
      
      <MDBBtn className='me-1' color='warning' id='sessions'>
        <Link to="#sessions">
        Register Now
        </Link>
      </MDBBtn>
     
      </MDBCol>
   */}

        </div>
        </div>
    </header>
    </main>
  );
};

export default Header;