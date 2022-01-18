import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShowcaseNav from "./ShowcaseNav";
import CsrfInput from "./CsrfInput";
import DismissibleAlert from "./DismissibleAlert";

const SignUp = ({
  alertType,
  showAlert,
  alertMessage,
  alertList,
  account_id,
}) => {
  const [alertState, setAlertState] = useState({
    alertType: alertType,
    showAlert: showAlert,
    alertMessage: alertMessage,
    alertList: alertList,
  });

  const onCloseAlert = () => {
    setAlertState((s) => ({ ...s, showAlert: false }));
  };

  useEffect(() => {
    document.getElementsByClassName(
      "container-fluid"
    )[0].parentElement.style.width = "100%";
  }, []);

  const containerMarginStyle = {
    marginTop: "32px",
    marginBottom: "32px",
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <ShowcaseNav />
          <Container style={containerMarginStyle}>
            <Row>
              <Col>
                {alertState.showAlert && (
                  <DismissibleAlert
                    type={alertState.alertType}
                    alertHeading={`🦄 ${alertState.alertMessage}`}
                    alertList={alertState.alertList}
                    onClose={onCloseAlert}
                  />
                )}
                <div className="auth-wrapper">
                  <div className="auth-inner">
                    <form action="/signup" method="POST">
                      <h3>Sign Up</h3>

                      <div className="form-group">
                        <label>Full name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          required
                        />
                      </div>
                      <input
                        type="hidden"
                        name="account_id"
                        value={account_id}
                      />
                      <CsrfInput />

                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Sign Up
                      </button>
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
    </Container>
  );
};

SignUp.propTypes = {
  account_id: PropTypes.number,
  showAlert: PropTypes.bool,
  alertMessage: PropTypes.string,
  alertList: PropTypes.array,
};

export default SignUp;
