import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowcaseNav from './ShowcaseNav'
class Login extends React.Component {

  componentDidMount() {
    document.getElementsByClassName("container-fluid")[0].parentElement.style.width = '100%';
  }

  render() {
    const containerMarginStyle = {
      marginTop: '32px',
      marginBottom: '32px',
    };

    return (
      <Container fluid>
        <Row>
          <Col>
            <ShowcaseNav />
            <Container style={containerMarginStyle}>
              <Row>
                <Col>
                  <div className="auth-wrapper">
                    <div className="auth-inner">
                      <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                          </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                          Forgot <a href="#">password?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login
