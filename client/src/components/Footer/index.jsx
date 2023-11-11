import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MDBBtn, MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="footer bg-black p-4 d-flex justify-content-center" data-aos="fade-up">
      <Container>
        <p className="text-center text-white">Connect with us on social media.</p>
        <MDBRow className="d-flex justify-content-center text-center text-white">
          <MDBCol md={12} className="d-flex justify-content-center text-center text-white">
            <MDBBtn tag='a' href="tel:4437711708" color='none' className='m-1' style={{ color: '#3b5998' }}>
              <MDBIcon icon='phone' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' href='https://twitter.com/301Catching' color='none' className='m-1' style={{ color: '#55acee' }}>
              <MDBIcon fab icon='twitter' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' href='mailto:301catching@gmail.com' color='none' className='m-1' style={{ color: '#dd4b39' }}>
              <MDBIcon fab icon='google' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' href="https://www.instagram.com/301_catching/" color='none' className='m-1' style={{ color: '#ac2bac' }}>
              <MDBIcon fab icon='instagram' size='lg' />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
};

export default Footer;
