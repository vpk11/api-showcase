import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FormTextField from "./FormTextField"
import FormSelect from "./FormSelect"
import FormTextArea from "./FormTextArea"
import CsrfInput from './CsrfInput'
class NewApi extends React.Component {
  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };

    const saveButtonStyle = {
      marginTop: '32px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    };
    return (
      <Container style={containerMarginStyle}>
        <Row>
          <Col>
            <Form action="/apis" method="POST" >
              <Card>
                <Card.Header as="h5">Create Api Doc({this.props.versionName})</Card.Header>
                <Card.Body>
                  <FormSelect controlId='MethodSelect' label='Method' type='select' options={this.props.methods} name='method' />
                  <FormTextField controlId='EndPointField' label='Endpoint' type='text' placeholder='Endpoint' name='endpoint' />
                </Card.Body>
              </Card>
              <input type="hidden" name="verion_id" value={this.props.versionId} />
              <CsrfInput />
              <Button variant="dark" style={saveButtonStyle}>Save</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
NewApi.propTypes = {
  methods: PropTypes.array.isRequired,
  projectName: PropTypes.string,
  projectId: PropTypes.number,
  versionName: PropTypes.string,
  versionId: PropTypes.number,
}

export default NewApi
