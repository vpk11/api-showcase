import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Welcome = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="api-box">
            <div className="text-center api-heading">API SHOWCASE</div>
            <div className="text-center btns-margin">
              <Button
                variant="outline-dark"
                className="btn-border"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </Button>
              <Button
                variant="outline-dark"
                className="btn-margin btn-border"
                onClick={() => (window.location.href = "/signup")}
              >
                Signup
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
