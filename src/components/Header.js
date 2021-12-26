import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Container className="header--container">
      <Row className="header--row">
        <Col className="header--col">
          <header className="header--text">
            <i className="fas fa-globe-americas"></i>
            &nbsp;my travel journal.
          </header>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;