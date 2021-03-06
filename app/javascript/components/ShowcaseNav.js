import React from "react"
import PropTypes from "prop-types"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class ShowcaseNav extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/projects">API SHOWCASE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#">
              {this.props.username}
            </Nav.Link>
            {!this.props.hideLogout &&
              <Nav.Link eventKey={2} href="/logout">Logout</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

ShowcaseNav.propTypes = {
  username: PropTypes.string,
  hideLogout: PropTypes.bool,
}

export default ShowcaseNav
