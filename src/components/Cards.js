import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

// function to dinamically render images
function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

// Cards components
const Cards = ({image, alt, title, location, date, start, end, googleMaps, description}) => {
  return (
    <Card className="card--container">
      <Card.Body className="card--body">
      <Row className="card--row">
        <Col className="card--col" sm={12} lg={6}>
          <Image src={images[image]} alt={alt} rounded fluid className="card--image"/>
        </Col>
        <Col className="card--col">
            <Card.Header className="card--header">
              <Card.Text as="span" className="card--locationName"><i class="fas fa-map-marker-alt">&nbsp;</i>{location.toUpperCase()}</Card.Text>
              <Card.Link href={googleMaps} target="_blank" rel="noopener noreferrer" className="card--googleMaps">View on Google Maps</Card.Link>
            </Card.Header>
            <Card.Title className="card--title">{title}</Card.Title>
            <Card.Text as="h6" className="card--date">{`${start} - ${end}`}</Card.Text>
            <Row className="card--description--row">
              <Col>
                <Card.Text className="card--description">{description}</Card.Text>
              </Col>
            </Row>
        </Col>
      </Row>
      <hr className="card--line" />
      </Card.Body>
    </Card>
  );
}

export default Cards;