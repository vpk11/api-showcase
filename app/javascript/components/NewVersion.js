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
class NewVersion extends React.Component {

  componentDidMount() {
  }

  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const projectNameStyle = {
      paddingLeft: '12px',
      fontWeight: 'bold',
      outline: 'none',
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
                  <Form action="/versions" method="POST" >
                    <Card>
                      <Card.Header as="h5">Create Version</Card.Header>
                      <Card.Body>
                        <Form.Group controlId="formGroupProject">
                          <Form.Label>Project</Form.Label>
                          <Form.Control plaintext readOnly defaultValue={this.props.projectName} style={projectNameStyle} />
                        </Form.Group>
                        <Form.Group controlId="formGroupVersion">
                          <Form.Label>Version</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            name="name"
                          />
                        </Form.Group>
                        <Form.Group id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Active" name="active" />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                    <input type="hidden" name="project_id" value={this.props.projectId} />
                    <CsrfInput />
                    <Button variant="dark" type="submit" style={saveButtonStyle} >
                      Create Version
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

NewVersion.propTypes = {
  projectId: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
}

export default NewVersion
