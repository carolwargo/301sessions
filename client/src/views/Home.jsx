import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { Card } from "react-bootstrap";
import Tuesday from "../assets/Tuesday.png";
import Thursday from "../assets/Thursday.png";
import Rawlings from "../assets/Rawlings.png";
import "../App.css";

const Home = () => {
  return (
    <main>
      <Container className="d-flex bg-black justify-content-center text-center p-4 text-white">
        <div>
          <h3 >301 CATCHING SESSIONS SIGNUP</h3>
          <p>
            Click on the session you would like to attend to purchase your spot.
          </p>
        </div>
      </Container>
<br></br>
      <Container>
        <Row className="justify-content-center bg-secondary-subtle"
        style={{borderRadius:'.5rem', boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.5)"}}>
        <br></br>
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
                
                  <br></br>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
        </Container>
        <br></br>
        <br></br>
        <Container className="bg-secondary-subtle p-5 text-black align-items-center justify-content-center"
         style={{borderRadius:'.5rem', boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.5)"}}>
        
        <Row>
        <Col md={6}>
            <p>
              <b>
                <u>WHAT TO BRING</u>
              </b>{" "}
              <br></br>
             cup, gear, mitt, drink, athletic shoes (no cleats)
            </p>
            </Col>
            <Col md={3}>
        <p>
              <b>
              <u>"301 South" Location</u>
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
            </Col>
            <Col md={3}>
        <p>
              <b>
                <u>"301 North" Location</u>
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
                href="https://www.google.com/maps?q=8288+Telegraph+Rd.+Odenton,+MD+21113"
                style={{ fontSize: "14px" }}
              >
                {" "}
               8288 Telegraph Rd. Odenton
              </a>
            </p>
            </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
    </main>
  );
};

export default Home;
