import React from "react";
import { Container } from "react-bootstrap";
import { MDBBtn, MDBCol, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="footer bg-black p-4 d-flex justify-content-center">
      <Container>
        <p className="text-center text-white">
          Connect with us on social media.
        </p>
        <MDBRow className="d-flex justify-content-center text-center text-white">
          <MDBCol
            md={12}
            className="d-flex justify-content-center text-center text-white"
          >
            <a href="tel:4437711708">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#3b5998" }}
              >
                <MDBIcon icon="phone" size="lg" />
              </MDBBtn>
            </a>

            <a href="https://twitter.com/301Catching">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#55acee" }}
              >
                <MDBIcon fab icon="twitter" size="lg" />
              </MDBBtn>
            </a>

            <a href="mailto:301catching@gmail.com">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#dd4b39" }}
              >
                <MDBIcon fab icon="google" size="lg" />
              </MDBBtn>
            </a>

            <a href="https://www.instagram.com/301_catching/">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#ac2bac" }}
              >
                <MDBIcon fab icon="instagram" size="lg" />
              </MDBBtn>
            </a>
          </MDBCol>
        </MDBRow>
      </Container>
    </div>
  );
};

export default Footer;
