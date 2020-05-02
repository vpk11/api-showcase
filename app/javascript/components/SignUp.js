import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowcaseNav from './ShowcaseNav'
import CsrfInput from './CsrfInput'
import DismissibleAlert from './DismissibleAlert'
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {
        alertType: props.alertType,
        showAlert: props.showAlert,
        alertMessage: props.alertMessage,
        alertList: props.alertList,
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
            <ShowcaseNav />
            <Container style={containerMarginStyle}>
              <Row>
                <Col>
                  {this.state.alert.showAlert && <DismissibleAlert type={this.state.alert.alertType} alertHeading={`🦄 ${this.state.alert.alertMessage}`} alertList={this.state.alert.alertList} onClose={this.onCloseAlert} />}
                  <div className="auth-wrapper">
                    <div className="auth-inner">
                      <form action='/signup' method='POST'>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                          <label>Full name</label>
                          <input name='name' type="text" className="form-control" placeholder="First name" required />
                        </div>

                        <div className="form-group">
                          <label>Email address</label>
                          <input name='email' type="email" className="form-control" placeholder="Enter email" required />
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input name='password' type="password" className="form-control" placeholder="Enter password" required />
                        </div>
                        <input type="hidden" name="account_id" value={this.props.account_id} />
                        <CsrfInput />

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                          Already registered <a href="/login">sign in?</a>
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

SignUp.propTypes = {
  account_id: PropTypes.number,
  showAlert: PropTypes.bool,
  alertMessage: PropTypes.string,
  alertList: PropTypes.array,
}

export default SignUp
