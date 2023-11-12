import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FaqPic from "../assets/images/FaqPic.png";


const Faq = () => {
  return (
    <main className="p-2">
     <div>
    <br></br>
      <Container>
        <Row className="d-flex justify-content-center align-items-center text-center p-4 bg-dark text-white" style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}>
          <h1 style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)", color: 'red' }}> 301 SESSIONS F.A.Q.</h1>
          <p>F.A.Q. Frequently Asked Questions</p>
        </Row>
      </Container>
      <Container className="faq-container border border-black"
        style={{ 
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
          borderRadius: '.5rem'
        }}>

        <Row className="faq-content-row  bg-secondary-subtle text-black justify-content-center"
        style={{paddingTop:'1rem', paddingBottom:'1rem'}}
        >
        
<Col md={8} className="mx-auto p-2" >
<Container>
<img src={FaqPic} alt="faq-pic" className="img-fluid justify-content-center" />
         </Container>
         <br></br>
       
          
          </Col>
          <Col md={4} className="mx-auto justify-content-center p-3">
          <Container style={{fontSize:'14px'}}>
            <h6 style={{color:'red'}}>
              <i>Q: What do I need to bring?</i>
            </h6>
            <p>
              A: All catchers should bring cup, gear, mitt, drink, athletic
              shoes <b>{"NO CLEATS OF ANY KIND ALLOWED."}</b>
            </p>
            </Container>
            <Container style={{fontSize:'14px'}}>
             <h6 style={{color:'red'}}>
              <i>Q: What Are The Facility Addresses?</i>
            </h6>
              <p>
              <b> "301 SOUTH"</b> <br></br>
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
            <Container style={{fontSize:'14px'}}>
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

            <Container style={{fontSize:'14px'}}>
               <h6 style={{color:'red'}}>
                <i>Q: What Winter Sessions Are Offered?</i>
              </h6>

              <ul>
               <li><b><i>"301 North Wednesdays"</i></b> - Grades: 9-12 Dates: 12/6, 12/13, 12/20, 12/27 </li>
             
               <li><b><i>"301 South Tuesdays"</i></b> - Grades: 9-12 Dates: 12/12, 12/19, 12/26, 12/27</li>
           
               <li><b><i>"301 South Thurdays"</i></b> - Ages: 9-14yrs Dates: 12/12, 12/19, 12/26, 12/27 </li>
              </ul>
            </Container>
            <Container style={{fontSize:'14px'}}>
             <h6 style={{color:'red'}}>
              <i>Q: What is the refund policy?</i>
            </h6>
            <p>
              A: <b>No Refunds:</b> If injury or illness occurs,
              please <a href="tel:443-771-1708">Contact Us</a> immediately to
              discuss possible options.  
            </p>
            </Container>
          </Col>
       
            <p className="text-center">
              You may <a href="mailto:301CATCHING@GMAIL.COM">Email</a> or{" "}
              <a href="tel:443-771-1708">Call</a> us at anytime with questions or concerns.
            </p>
           
        </Row>
       <Row></Row>
      </Container>
      <br></br>
      </div>
    </main>
  );
};

export default Faq;
