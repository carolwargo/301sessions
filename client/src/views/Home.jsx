import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Testimonials from "../components/Testimonials/index.jsx";
import Faq from "../views/Faq.jsx";
import Sessions from "../views/Sessions.jsx";
import "../App.css";

const Home = () => {
  return (
    <main className="p-5">
     
      <Container className="p-1" id="sessions">
     
        <Sessions />
      </Container>
      <Container className="p-2 border-top">
      <br></br>
        <Faq />
      </Container>
      <Container className="p-2 border-top">
      <br></br>
        <Testimonials />
      </Container>

    </main>
  );
};

export default Home;
