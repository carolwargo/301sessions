import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Testimonials from "../components/Testimonials/index.jsx";
import Faq from "../views/Faq.jsx";
import Sessions from "../views/Sessions.jsx";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <main className="p-3">
      <Container id="sessions" data-aos="fade-up">
        <Sessions />
      </Container>
      <Container className="p-2 border-top" data-aos="fade-up">
        <Faq />
      </Container>
      <Container className="p-2 border-top" data-aos="fade-up">
        <br></br>
        <Testimonials />
      </Container>
    </main>
  );
};

export default Home;
