import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Testimonials from "../components/Testimonials/index.jsx";
import Faq from "../views/Faq.jsx";
import Sessions from "../components/Sessions.jsx";
import Intro from "../components/Intro/Intro.jsx";
import FixedButtons from "../components/FixedButtons/FixedButtons.jsx"; // Adjust the path based on your project structure
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
    <main className="p-4">
      <Container className="p-2 " id="intro" data-aos="fade-up">
        <Intro />
      </Container>
      <Container data-aos="fade-up">
        <Sessions />
      </Container>
      <Container className="p-4 border-top" id="faq" data-aos="fade-up">
        <Faq />
      </Container>
      <Container className="p-4 border-top" id="testimonials" data-aos="fade-up">
     
        <Testimonials />
      </Container>

      {/* FixedButtons component */}
      <FixedButtons />
    </main>
  );
};

export default Home;
