import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CsrfInput from './CsrfInput'
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

    return (
      <Container style={containerMarginStyle}>
        <Row>
          <Col>
            <Form action="/versions" method="POST" >
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
              <input type="hidden" name="project_id" value={this.props.projectId}/>
              <CsrfInput/>
              <Button variant="dark" type="submit">
                Create Version
              </Button>
            </Form>
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
