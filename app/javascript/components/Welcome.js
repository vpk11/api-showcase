import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowcaseNav from './ShowcaseNav'
import Button from 'react-bootstrap/Button'
class Welcome extends React.Component {

  componentDidMount() {
    document.getElementsByClassName("container-fluid")[0].parentElement.style.width = '100%';
  }

  render() {

    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="api-box">
              <div className="text-center api-heading">API SHOWCASE</div>
              <div className="text-center btns-margin">
                <Button variant="outline-dark" className="btn-border" onClick={event => window.location.href = '/login'}>Login</Button>
                <Button variant="outline-dark" className="btn-margin btn-border" onClick={event => window.location.href = '/signup'}>Signup</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome
