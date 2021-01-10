import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import ShardsNav from "../components/ShardsNav";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

export default class HomePage extends React.Component {
  render() {
    return (
      <Container fluid className="container-fluid">
        <Row>
          <Col>
            <ShardsNav />
          </Col>
        </Row>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <About />
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6}>
            <p>asas</p>
          </Col>
          <Col sm={6} md={6}>
            <p>asas</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block outline theme="info">
              Click me fam
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    ); 
  }
}
