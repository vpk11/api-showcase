import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CsrfInput from './CsrfInput'
class NewProject extends React.Component {
  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };

    return (
      <Container style={containerMarginStyle}>
        <Row>
          <Col>
            <Form action="/projects" method="POST" >
              <Form.Group controlId="formGroupProjectName">
                <Form.Label>Project</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group controlId="formGroupProjectDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Description"
                  name="description"
                />
              </Form.Group>
              <input type="hidden" name="user_id" value={this.props.userId} />
              <input type="hidden" name="account_id" value={this.props.accountId} />
              <CsrfInput />
              <Button variant="dark" type="submit">
                Create Project
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
NewProject.propTypes = {
  userId: PropTypes.number.isRequired,
  accountId: PropTypes.number.isRequired
}


export default NewProject
