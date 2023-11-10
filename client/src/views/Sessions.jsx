import React from "react";
import { motion } from "framer-motion";
import {Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { Card } from "react-bootstrap";
import Tuesday from "../assets/images/Tuesday.png";
import Thursday from "../assets/images/Thursday.png";
import Rawlings from "../assets/images/Rawlings.png";
import "../App.css";



const Sessions = () => {
  return (
    <main className=" p-5 ">
<Container >
      <Row className="d-flex justify-content-center text-center text-black" 
      
      style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)"
                }}>
        <div>
          <h1  style={{
    color:'red'
   }}>301 CATCHING SESSIONS SIGNUP</h1>
          <p>
            Click on the session you would like to attend to purchase your spot.
          </p>
        </div>
     </Row>
      
        <Row className="justify-content-center " 
        id="sessions">
        
          <Col
            md={3}
            className="p-4 text-center"
            id="sessions"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
           
           
            <p>
              <b>TUESDAY SESSION</b> <br></br>"South"
            
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
                className="tuesday"
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
                className="rawlings"
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
          <Container>
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
          <br></br><i>** All participants will be required to sign the 301CATCHING
     prior to participation. </i></p>
     </Container>
        </Row>
        </Container>
        <br></br>
    </main>
  );
};

export default Sessions;
