import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowcaseNav from './ShowcaseNav'
class SignUp extends React.Component {

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
                        <h3>Sign Up</h3>

                        <div className="form-group">
                          <label>First name</label>
                          <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                          <label>Last name</label>
                          <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                          <label>Email address</label>
                          <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                          Already registered <a href="#">sign in?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default SignUp
