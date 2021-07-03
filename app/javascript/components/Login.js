import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowcaseNav from './ShowcaseNav'
import CsrfInput from './CsrfInput'
import DismissibleAlert from './DismissibleAlert'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {
        alertType: props.alertType,
        showAlert: props.showAlert,
        alertMessage: props.alertMessage,
      }
    }
    this.onCloseAlert = this.onCloseAlert.bind(this);
  }

  componentDidMount() {
    document.getElementsByClassName("container-fluid")[0].parentElement.style.width = '100%';
  }

  onCloseAlert() {
    this.setState({
      alert: {
        ...this.state.alert, ...{ showAlert: false }
      }
    })
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
            <ShowcaseNav hideLogout={true} />
            <Container style={containerMarginStyle}>
              <Row>
                <Col>
                  {this.state.alert.showAlert && <DismissibleAlert type={this.state.alert.alertType} alertHeading={`🦄 ${this.state.alert.alertMessage}`} onClose={this.onCloseAlert} />}
                  <div className="auth-wrapper">
                    <div className="auth-inner">
                      <form action='/login' method='POST'>
                        <h3>Sign In</h3>

                        <div className="form-group">
                          <label>Email address</label>
                          <input name='email' type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input name="password" type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input name='remember' type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                          </div>
                        </div>
                        <CsrfInput />

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        {/* <p className="forgot-password text-right">
                          <a href="#">Forgot password?</a>
                        </p> */}
                        <p className="forgot-password text-right">
                          Not registered yet <a href="/signup">Sign Up!</a>
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

Login.propTypes = {
  alertType: PropTypes.string,
  showAlert: PropTypes.bool,
  alertMessage: PropTypes.string,
}

export default Login
