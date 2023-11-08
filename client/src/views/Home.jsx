import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../components/Header/index.jsx";
import Testimonials from "../components/Testimonials/index.jsx";
import Faq from "../views/Faq.jsx";
import Sessions from "../views/Sessions.jsx";
import "../App.css";

const Home = () => {
  return (
    <main className="p-5">
      <Header />
     
      <Container className="p-2 border-top">
      <br></br>
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
      <br></br>
    </main>
  );
};

export default Home;
