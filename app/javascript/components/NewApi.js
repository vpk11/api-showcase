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
import DismissibleAlert from "./DismissibleAlert"
import CsrfInput from './CsrfInput'
import { ALERT_HEADING } from '../utils/constants'
import ShowcaseNav from './ShowcaseNav'
class NewApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    if (this.props.errors) {
      this.setState({ show: true })
    }
  }

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
                  {this.state.show &&
                    <DismissibleAlert type='error' alertList={this.props.errors} alertHeading={ALERT_HEADING.error} onClose={() => this.setState({ show: false })} />
                  }
                  <Form action={`/versions/${this.props.versionId}/apis`} method="POST" >
                    <Card>
                      <Card.Header as="h5">Create Api Doc({this.props.versionName})</Card.Header>
                      <Card.Body>
                        <FormSelect
                          controlId='MethodSelect'
                          label='Method' type='select'
                          options={this.props.methods}
                          name='method'
                          value={this.props.api && this.props.api.method}
                        />
                        <FormTextField
                          controlId='EndPointField'
                          label='Endpoint' type='text'
                          placeholder='Endpoint'
                          name='end_point'
                          value={this.props.api && this.props.api.end_point}
                        />
                        <FormTextArea
                          controlId='DescriptionField'
                          label='Description' type='textarea'
                          rows={2}
                          name='description'
                          value={this.props.api && this.props.api.description}
                        />
                      </Card.Body>
                    </Card>
                    <input type="hidden" name="version_id" value={this.props.versionId} />
                    <input type="hidden" name="archived" value={false} />
                    <CsrfInput />
                    <Button variant="dark" style={saveButtonStyle} type="submit">Save</Button>
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
NewApi.propTypes = {
  methods: PropTypes.array.isRequired,
  projectName: PropTypes.string,
  projectId: PropTypes.number,
  versionName: PropTypes.string,
  versionId: PropTypes.number,
  api: PropTypes.object,
  errors: PropTypes.array,
}

export default NewApi
