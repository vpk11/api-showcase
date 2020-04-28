import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CsrfInput from './CsrfInput'
import ShowcaseNav from './ShowcaseNav'
class NewProject extends React.Component {
  render() {
    const containerMarginStyle = {
      marginTop: '32px',
      marginBottom: '32px',
    };

    const saveButtonStyle = {
      marginTop: '32px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    };

    return (
      <Container fluid>
        <Row>
          <Col>
            <ShowcaseNav username={'kuttu'} />
            <Container style={containerMarginStyle}>
              <Row>
                <Col>
                  <Form action="/projects" method="POST" >
                    <Card>
                      <Card.Header as="h5">Create Project</Card.Header>
                      <Card.Body>
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
                      </Card.Body>
                    </Card>
                    <input type="hidden" name="user_id" value={this.props.userId} />
                    <input type="hidden" name="account_id" value={this.props.accountId} />
                    <CsrfInput />
                    <Button variant="dark" type="submit" style={saveButtonStyle} >
                      Create Project
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
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
