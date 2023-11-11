import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; 
import FaqPic from "../assets/images/FaqPic.png";

const fadeInAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Faq = () => {
  return (
    <main>
       <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimation}
                  whileHover={{ scale: .5, transition: { duration: 125.5 } }}
                >
      <Container className="d-flex justify-content-center align-items-center text-center p-3 text-black" style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}>
        <div>
          <h1 style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", color: 'red' }}> 301 SESSIONS F.A.Q.</h1>
          <p>F.A.Q. Frequently Asked Questions</p>
        </div>
      </Container>
      <Container className="faq-container border border-black"
        style={{ 
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
          borderRadius: '.5rem'
        }}>

        <Row className="faq-content-row p-3 bg-secondary-subtle text-black justify-content-between">
        
<Col md={6} className="mx-auto">
<Container>
<img src={FaqPic} alt="faq-pic" className="img-fluid" />
         </Container>
         <br></br>
            <Container>
            <h5>
              <i>Q: What is the refund policy?</i>
            </h5>
            <p>
              A: <b>No Refunds:</b> If injury or illness occurs,
              please <a href="tel:443-771-1708">Contact Us</a> immediately to
              discuss possible options.  
            </p>
            </Container>
          
          </Col>
          <Col md={6} className="mx-auto">
          <Container>
            <h5>
              <i>Q: What do I need to bring?</i>
            </h5>
            <p>
              A: All catchers should bring cup, gear, mitt, drink, athletic
              shoes {"NO CLEATS OF ANY KIND ALLOWED."}
            </p>
            </Container>
            <Container>
            <h5>
              <i>Q: What Are The Facility Addresses?</i>
            </h5>
              <p>
              A: <b> "301 SOUTH"</b> <br></br>
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
            <Container className="301-north" id="301-north">
              <p>
                <b>"301 NORTH"</b> <br></br>
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

            <Container>
              <h5>
                <i>Q: What Winter Sessions Are Offered?</i>
              </h5>
              <p>
               <b><i>"301 NORTH"</i> - Grades: 9-12 </b>12/6, 12/13, 12/20, 12/27 <br></br>
               <b><i>"301 SOUTH"</i> - Grades: 9-12 </b>12/12, 12/19, 12/26, 12/27 <br></br>
               <b><i>"301 SOUTH"</i> - Ages: 9-14yrs </b> 12/12, 12/19, 12/26, 12/27 
              </p>
            </Container>
            <Container>
            <h5>
              <i>Q: Who do I contact with questions?</i>
            </h5>
            <p>
              You may <a href="mailto:301CATCHING@GMAIL.COM">Email</a> or{" "}
              <a href="tel:443-771-1708">Call</a> Corey Wargo at anytime.
            </p>
            </Container>
          </Col>
        </Row>
       
      </Container>
      <br></br>
      </motion.div>
    </main>
  );
};

export default Faq;
