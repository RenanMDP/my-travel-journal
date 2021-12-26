import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import dataArray from './data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const cards = dataArray.map(item => {
    return (
      <Cards
        key={item.id}
        image={item.image}
        alt={item.alt}
        title={item.title}
        location={item.location}
        googleMaps={item.googleMaps}
        start={item.date.start}
        end={item.date.end}
        description={item.description}
      />
    )
  });

  return (
    <Container className="main--container">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          {cards}
        </Col>
      </Row>
    </Container>
  );
}

export default App;