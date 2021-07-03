import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ShowcaseNav from "./ShowcaseNav"
import ApiIndexList from "./ApiIndexList"

class ApiIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apis: props.apis,
    }
  }
  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const newApiButtonStyle = {
      float: 'right'
    };

    const apisList = this.state.apis.map((api) => <ApiIndexList apiId={api.apiId} apiMethod={api.apiMethod}
      apiEndPoint={api.apiEndPoint} apiDescription={api.apiDescription} parameters={api.parameters}
      headers={api.headers} bodies={api.bodies} responses={api.responses} key={api.apiId} handleChildClick={(apis) => { this.setState({ apis: apis }) }} />);

    return (
      <Container fluid>
        <Row>
          <Col>
            <ShowcaseNav username={'kuttu'} />
            <Container style={containerMarginStyle}>
              <Row>
                <Col>
                  <Button variant="outline-primary" style={newApiButtonStyle} href={`/versions/${this.props.versionId}/apis/new`}>New API</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  {apisList}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

ApiIndex.propTypes = {
  apis: PropTypes.array.isRequired,
  versionId: PropTypes.number.isRequired,
}

export default ApiIndex