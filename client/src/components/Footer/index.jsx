import React from "react";
import { Container} from "react-bootstrap";
import { MDBBtn, MDBCol, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <div className="footer bg-black p-4 d-flex justify-content-center">
      <Container>
        
        <p className="text-center text-white">
          Connect with us on social media.
          </p>
          <MDBRow className='d-flex justify-content-center text-center text-white'> 
         
<MDBCol md={12} className="d-flex justify-content-center text-center text-white">
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
            <MDBIcon fab icon='facebook-f' size='md' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
            <MDBIcon fab icon='twitter' size='md' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
            <MDBIcon fab icon='google' size='md' />
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
            <MDBIcon fab icon='instagram' size='md' />
          </MDBBtn>
          </MDBCol>
          </MDBRow>
    
      </Container>
    </div>
  );
}

export default Footer;

