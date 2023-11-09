import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Faq = () => {
  return (
    <main className=" p-3 justify-content-center align-content-around">

<Container className="d-flex justify-content-center text-center p-3 text-black"
      style={{ textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
    
                }}>
        <div>
          <h1  style={{
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
    color:'red'
   }}> 301 Sessions F.A.Q.</h1>
          <p>
           F.A.Q. Frequently Asked Questions
          </p>
        </div>
      </Container>
      <Container className="faq-container border border-black"
         style={{ 
         boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
         borderRadius:'.5rem'
                   }}>
        <br></br>

        <Row className="faq-content-row p-4">
          <Col md={6}>
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
              <i>Q: What is the cancellation policy?</i>
            </h5>
            <p>
              A: <b>Refund & Weather Policy:</b> If injury or illness occurs,
              please <a href="tel:443-771-1708">Contact Us</a> immediately to
              discuss possible options for future sessions. Due to the use of
              private facilities, events will take place as scheduled. In the
              event of a cancellation, participants will be notified
              immediately. We appreciate your understanding and cooperation.
            </p>
            </Container>
            <Container>
            <h5>
              <i>Q: Who do I contact with questions?</i>
            </h5>
            <p>
              You may <a href="mailto:301CATCHING@GMAIL.COM">Email Us</a> or{" "}
              <a href="tel:443-771-1708">Call Us</a> at anytime.
            </p>
            </Container>
          </Col>
          <Col md={6}>
            <Container>
            <h5>
              <i>Q: What Are The Facility Addresses?</i>
            </h5>
              <p>
                <b>A: "301 SOUTH"</b> <br></br>
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
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Faq;
