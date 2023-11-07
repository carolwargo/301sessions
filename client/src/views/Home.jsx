import React from "react";
import { motion } from "framer-motion";


import "bootstrap/dist/css/bootstrap.css";

import { Card, Row, Col } from "react-bootstrap";
import Tuesday from "../assets/Tuesday.png";
import Thursday from "../assets/Thursday.png";

const Home = () => {
  return (
<main>

<Row className="p-4">
    
<Col  style={{ paddingBottom: "1rem", paddingTop:'1rem'}}>
    <h5>TUESDAY SESSION</h5>
    <p>HIGH SCHOOL grades 9-12<br></br>
    <br></br>
    LOCATION: The Impact Center<br></br>
 
  
    <img
  src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png"
  alt="Google Maps Pin"
  style={{
    height: '18px', // Set the desired height in pixels
    width: 'auto',   // Let the width adjust proportionally
  }}
/>

  <a href="https://www.google.com/maps?q=250+W+Bay+Front+Rd+Lothian,+MD+20711" style={{fontSize: '14px'}}> 250 W Bay Front Rd Lothian</a>

<br></br>
    DATES: 12/12, 12/19, 12/26<br></br>
    TIME: 6:00-8:00pm<br></br>
    Limit 12 Catchers
    </p>
    <br></br>
   
    <h5>WHAT TO BRING</h5>
    <p>HIGH SCHOOL grades 9-12<br></br>
    LOCATION: The Impact Center<br></br>
    DATES: 12/12, 12/19, 12/26<br></br>
    TIME: 6:00-8:00pm<br></br>
    Limit 12 Catchers
    </p>
    <br></br>
    </Col>
<Col  style={{ paddingBottom: "1rem", paddingTop:'1rem'}}>
          <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
            <Card
              className="bg-dark text-white"
              style={{
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)", // Change the rgba value to white
                width: "100%", 
                height: "auto",
              }}
            >
              <Card.Img variant="top" src={Thursday} />
              <Card.Body className="text-center">
                <Card.Title style={{ fontSize: "1rem", color: "red" }}>
                  <b> "THURSDAY SESSIONS PACKAGE" </b>
                </Card.Title>
                <Card.Text style={{ fontSize: ".75rem" }}>
                  <b>Ages: </b>
                  9-14
                  <br></br>
                  <b>Dates: </b>
                  12/14 12/21 12/28
                </Card.Text>

                <button
                  className="btn btn-primary btn-md btn-block"
                  type="submit"
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

        <Col  style={{ paddingBottom: "1rem", paddingTop:'1rem'}}>
    <h5>TUESDAY SESSION</h5>
    <p>HIGH SCHOOL grades 9-12<br></br>
    LOCATION: The Impact Center<br></br>
    DATES: 12/12, 12/19, 12/26<br></br>
    TIME: 6:00-8:00pm<br></br>
    Limit 12 Catchers
    </p>
    <br></br>
   
    <h5>WHAT TO BRING</h5>
    <p>HIGH SCHOOL grades 9-12<br></br>
    LOCATION: The Impact Center<br></br>
    DATES: 12/12, 12/19, 12/26<br></br>
    TIME: 6:00-8:00pm<br></br>
    Limit 12 Catchers
    </p>
    <br></br>
    </Col>


        <Col  style={{ paddingBottom: "1rem"}}>
          <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
            <Card
              className="bg-dark text-white"
              style={{
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)", // Change the rgba value to white
                width: "100%", 
                height: "auto", 
              }}
            >
              <Card.Img variant="top" src={Tuesday} />
              <Card.Body className="text-center">
              <Card.Title style={{ fontSize: "1rem", color: "red" }}>
                  <b> "TUESDAY SESSIONS PACKAGE" </b>
                </Card.Title>
                <Card.Text style={{ fontSize: ".75rem" }}>
                  <b>Grades: </b>
                  9-12
                  <br></br>
                  <b>Dates: </b>
                  12/12 12/19 12/26
                </Card.Text>
                <button
                  className="btn btn-primary btn-md btn-block"
                  type="submit"
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

</Row>
   
    </main>
  );
};

export default Home;
