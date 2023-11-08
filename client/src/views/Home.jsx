import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { Card } from "react-bootstrap";
import Tuesday from "../assets/Tuesday.png";
import Thursday from "../assets/Thursday.png";
import Rawlings from "../assets/Rawlings.png";
import Header from '../components/Header/index.jsx';
import Testimonials from '../components/Testimonials/index.jsx';
import "../App.css";



const Home = () => {
  return (
    <main>
      <Header />
      <Container className="d-flex p-4 bg-black justify-content-center text-center p-4 text-white">
        <div>
          <h1  style={{
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
    color:'red'
   }}>301 CATCHING SESSIONS SIGNUP</h1>
          <p>
            Click on the session you would like to attend to purchase your spot.
          </p>
        </div>
      </Container>

      <Container className="p-5">
        <Row className="justify-content-center bg-secondary-subtle"
        style={{borderRadius:'.5rem', boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.5)"}}>
        
          <Col
            md={3}
            className="p-4 text-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
           
           
            <p>
              <b>TUESDAY SESSION </b>"South"
            
              Grades 9-12<br></br>
              12/12, 12/19, 12/26<br></br>
              6:00-8:00pm<br></br>
            </p>
            <p>
              <b>THURSDAY SESSION</b> "South"
            
              Ages 9-14
              <br></br>
              12/14, 12/21, 12/28<br></br>
              6:00-8:00pm<br></br>
            </p>
            <p>
              <b>RAWLINGS SESSION</b> "North"
             
              Grades 9-12
              <br></br>
            12/6, 12/13, 12/20, 12/27<br></br>
              6:00-8:00pm<br></br>
            </p>
          </Col>

          <Col md={3} className="p-4">
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Card
                className="bg-dark text-white"
                style={{
                  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Change the rgba value to white
                  width: "100%",
                  height: "auto",
                }}
              >
                <Card.Img variant="top" src={Tuesday} />
                <Card.Body className="text-center">
              
                  <Card.Title style={{ fontSize: ".75rem", color: "red" }}>
                    "Tuesday Sessions"
                  </Card.Title>

                  <button
                    className="btn btn-primary btn-md btn-block"
                    type="submit"
                    style={{ width: "200px" }} // Adjust the width as needed
                  >
                    <a
                      href="https://buy.stripe.com/bIY6p4finde58GA6oo"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BUY NOW
                    </a>
                  </button>
                
                  <br></br>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={3} className="p-4">
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Card
                className="bg-dark text-white"
                style={{
                  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  height: "auto",
                }}
              >
                <Card.Img variant="top" src={Thursday} />
                <Card.Body className="text-center">
                
                  <Card.Title style={{ fontSize: ".75rem", color: "red" }}>
                    "Thursday Sessions"
                  </Card.Title>

                  <button
                    className="btn btn-primary btn-md btn-block"
                    type="submit"
                    style={{ width: "200px" }} // Adjust the width as needed
                  >
                    <a
                      href="https://buy.stripe.com/9AQ14K7PV5LDe0UdQR"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BUY NOW
                    </a>
                  </button>
                  <br></br>
                
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          
          <Col md={3} className="p-4">
            <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
              <Card
                className="bg-dark text-white"
                style={{
                  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", // Change the rgba value to white
                  width: "100%",
                  height: "auto",
                }}
              >
                <Card.Img variant="top" src={Rawlings} />
                <Card.Body className="text-center">
              
                  <Card.Title style={{ fontSize: ".75rem", color: "red" }}>
                    "Rawlings Sessions"
                  </Card.Title>

                  <button
                    className="btn btn-primary btn-md btn-block"
                    type="submit"
                    style={{ width: "200px" }} // Adjust the width as needed
                  >
                    <a
                      href="http://matbaseball.com/tournaments/camps-clinics/301-catching"
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BUY NOW
                    </a>
                  </button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
          <p style={{textAlign:'center', color:'gray'}}><b>* Locations: </b>   
          301 North-
          <a
      href="https://www.google.com/maps?q=8288+Telegraph+Rd.+Odenton,+MD+21113"
      style={{ fontSize: "14px" }}
    >
      {" "}
       Rawlings Lab
    </a>  &    
    301 South-
    <a
      href="https://www.google.com/maps?q=250+W+Bay+Front+Rd+Lothian,+MD+20711"
      style={{ fontSize: "14px" }}
    >
      {" "}           
       The Impact Center
    </a>
          <br></br><i>** All participants will be required to sign the 301CATCHING <a href="/assets/waiver.pdf" target="_blank">
     waiver</a> prior to participation. </i></p>
        </Row>
        </Container>
        <br></br>
        <Container className="p-3 align-items-center justify-content-center border-top"
         style={{borderRadius:'.5rem'}}>
      <Container className="p-5">    
<Row>
<Col >
  <h1
   style={{
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
    color:'red',
   }}
  ><b> 301 Sessions F.A.Q.</b></h1>
</Col>
</Row>
<br></br>
<br></br>
<Row >
<Col md={6}>
  <h5><i>Q: What do I need to bring?</i></h5>
  <p>A: All catchers should bring cup, gear, mitt, drink, athletic shoes {"NO CLEATS OF ANY KIND ALLOWED."}</p>
  <h5><i>Q: What is the cancellation policy?</i></h5>
<p>
 A: <b>Refund & Weather Policy:</b> If injury or illness occurs, please{" "}
  <a href="tel:443-771-1708">Contact Us</a> immediately to discuss possible options
  for future sessions. Due to the use of private facilities, events will take
  place as scheduled. In the event of a cancellation, participants will be
  notified immediately.
  We appreciate your
  understanding and cooperation.
</p>
  <h5><i>Q: Who do I contact with questions?</i></h5>
  <p>
  You may <a href="mailto:301CATCHING@GMAIL.COM">Email Us</a> or {" "}
  <a href="tel:443-771-1708">Call Us</a> at anytime.
  </p>
  
</Col>
<Col md={6}>
<h5><i>Q: What Are The Facility Addresses?</i></h5>
  
  <Container className="301-south" id='301-south'>
<p>
    <b>
    A: "301 SOUTH"
    </b>{" "}
    <br></br>
    The Impact Center<br></br>
    <img
      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png"
      alt="Google Maps Pin"
      style={{
        height: "18px", // Set the desired height in pixels
        width: "auto", // Let the width adjust proportionally
      }}
    />
    <a
      href="https://www.google.com/maps?q=250+W+Bay+Front+Rd+Lothian,+MD+20711"
      style={{ fontSize: "14px" }}
    >
      {" "}
      250 W Bay Front Rd Lothian
    </a>
  </p>
  </Container>
  <Container className= '301-north' id='301-north'>
  <p>
    <b>
    "301 NORTH"
    </b>{" "}
    <br></br>
    The Rawlings Lab<br></br>
    <img
      src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png"
      alt="Google Maps Pin"
      style={{
        height: "18px", // Set the desired height in pixels
        width: "auto", // Let the width adjust proportionally
      }}
    />
    <a
      href="https://www.google.com/maps?q=8288+Telegraph+Rd.+Odenton,+MD+21113"
      style={{ fontSize: "14px" }}
    >
      {" "}
     8288 Telegraph Rd. Odenton
    </a>
  </p>
  </Container>
  <h5><i>Q: What Winter Sessions Are Offered?</i></h5>
  <Container>
   
      <p>"301 NORTH"- High School 12/6, 12/13, 12/20, 12/27</p>
      <p>"301 SOUTH"- High School 12/12, 12/19, 12/26, 12/27 <br></br></p>
      <p>"301 SOUTH"- Ages: 9-14yrs. 12/12, 12/19, 12/26, 12/27 <br></br></p>
 
  </Container>
</Col>

</Row>
</Container>
      </Container>
    
    
      <Container className="p-2 border-top">
      <br></br>
                <Testimonials />
</Container>
      <br></br>
      <br></br>
    </main>
  );
};

export default Home;
