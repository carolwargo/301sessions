import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from "react-bootstrap/Carousel";

import Container from 'react-bootstrap/Container';
import John4 from '../../assets/images/John4.png'; // Make sure to import your image
import Guy4 from '../../assets/images/Guy4.png'; // Make sure to import your image
import Joe4 from '../../assets/images/Joe4.png'; // Make sure to import your image
import Ryan4 from '../../assets/images/Ryan4.png'; // Make sure to import your image


const customContainerStyle = {
  maxWidth: "600px", // Adjust the maximum width as needed
  margin: "0 auto", // Center the container
  boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", 
  paddingRight: "0", // Add this line to remove right padding
  paddingLeft: "0", // Add this line to remove left padding
};

const customImgStyle = {
  width: "100%", // Make images fill the container width
  height: "auto",
  };
  

export default function CarouselFadeExample() {
  return (
    <div>
      <br></br>
    <Container>
        <Row className="d-flex justify-content-center p-3">
          <Col md={6}>
            <br></br>
           
        <h1
      style={{
        textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        color:'red'
       }}
       >
        TESTIMONIALS</h1>
        <h4>See What People Have To Say...</h4>
        <br></br>
      <p>As we read and celebrate these testimonials, we are reminded that success doesn't happen by chance and that baseball is more than just a game. It's about teamwork, discipline, growth, hard work, consistency, and the desire to overcome challenges.</p>
      </Col>
      
          <Col md={5} className="fluid " style={customContainerStyle}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  src={John4}
                  alt="First slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Guy4}
                  alt="second slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Ryan4}
                  alt="Third slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={Joe4}
                  alt="Fourth slide"
                  className="d-block"
                  style={customImgStyle}
                />
              </Carousel.Item>
            
            </Carousel>
          </Col>
        
        </Row>
        </Container>
    </div>
  );
}
