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
  render () {
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
                    <FormTextField controlId='EndPointField' label='Endpoint' type='text' placeholder='Endpoint' name='endpoint'/>
                  </Card.Body>
              </Card>

              <Card>
                <Card.Header as="h5">Headers</Card.Header>
                <Card.Body>
                  <FormTextField controlId='HeadersKeyField0' label='Key' type='text' placeholder='Key' name={`headers[${0}][key]`} />
                  <FormTextField controlId='HeadersValueObjectField0' label='Object' type='text' placeholder='Object' name={`headers[${0}][value_object]`} />
                  <FormTextArea controlId='HeadersDescriptionField0' label='Description' type='textarea' placeholder='Description' name={`headers[${0}][description]`} />
                  <Button variant="secondary" size="sm">New Header</Button>
                </Card.Body>
              </Card>

              <Card>
                <Card.Header as="h5">Params</Card.Header>
                <Card.Body>
                  <FormTextField controlId='ParamsKeyField0' label='Key' type='text' placeholder='Key' name={`params[${0}][key]`} />
                  <FormTextField controlId='ParamsValueObjectField0' label='Object' type='text' placeholder='Object' name={`params[${0}][value_object]`} />
                  <FormTextArea controlId='ParamsDescriptionField0' label='Description' type='textarea' placeholder='Description' name={`params[${0}][description]`} />
                  <Button variant="secondary" size="sm">New Params</Button>
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
