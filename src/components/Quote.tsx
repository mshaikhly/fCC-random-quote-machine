import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface QuoteProps {
  quote: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ quote, author }) => {
  return (
    <Container className="quote-container text-center">
      <Row className="align-items-center mb-4">
        <Col className="d-flex justify-content-start">
          <FaQuoteLeft size="30" />
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col className="d-flex justify-content-center">
          <h2 id="text">{quote}</h2>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col className="d-flex justify-content-end">
          <FaQuoteRight size="30" />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="d-flex justify-content-end">
          <h4 id="author">- {author}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Quote;
