import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Container from 'react-bootstrap/Container';
import John4 from '../../assets/images/John4.png'; // Make sure to import your image
import Guy4 from '../../assets/images/Guy4.png'; // Make sure to import your image
import Joe4 from '../../assets/images/Joe4.png'; // Make sure to import your image
import Ryan4 from '../../assets/images/Ryan4.png'; // Make sure to import your image

const cardData = [
  {
    id: 1,
  
    image: Guy4,
  },
  {
    id: 2,
  
    image: John4,
  },
  {
    id: 3,
  
    image: Ryan4,
  },
  {
    id: 4,
  
    image: Joe4,
  },
];


export default function GridExample() {
  return (
    <main className='pt-3 p-3'>
    <Container className='align-content-center justify-content-center'>
      <h1
      
      style={{
        textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        color:'red'
       }}
       >
        See What Some Have To Say...</h1>
        <br></br>
      <p>As we read and celebrate these testimonials, we are reminded that success doesn't happen by chance and that baseball is more than just a game. It's about camaraderie, discipline, growth, intelligent work, consistency, and the desire to overcome challenges.</p>
    <Row xs={1} md={2} lg={2} className="g-5 ">
      {cardData.map((card) => (
        <Col key={card.id}>
          <Card   style={{boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",}}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body style={{backgroundColor:"black"}}>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </main>
  );
}