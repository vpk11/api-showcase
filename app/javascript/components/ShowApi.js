import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import DismissibleAlert from './DismissibleAlert'
import ApiDetailsCard from './ApiDetailsCard'
class ShowApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: props.showAlert
    }
  }

  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const eachDetailsCard = {
      marginBottom: '32px',
    };

    return (
      <Container style={containerMarginStyle}>
        <Row>
          <Col>
            <DismissibleAlert show={this.state.showAlert} type='success' alertHeading={this.props.alertMessage} />
            <Card>
              <Card.Header as="h5">API Details</Card.Header>
              <Card.Body>
                <div style={eachDetailsCard}>
                  <h6>Method</h6>
                  <div>{this.props.api.method}</div>
                </div>
                <div style={eachDetailsCard}>
                  <h6>Endpoint</h6>
                  <div>{this.props.api.end_point}</div>
                </div>
                <div style={eachDetailsCard}>
                  <h6>Description</h6>
                  <div>{this.props.api.description}</div>
                </div>

                <CardDeck>
                  <ApiDetailsCard buttonID='addParams' cardTitle='Params' addButtonText='Add Params' itemsList={this.props.params} />

                  <ApiDetailsCard buttonID='addHeaders' cardTitle='Headers' addButtonText='Add Headers' itemsList={this.props.headers} />

                  <ApiDetailsCard buttonID='addBody' cardTitle='Body' addButtonText='Add Body' itemsList={this.props.bodies} />

                  <ApiDetailsCard buttonID='addResponse' cardTitle='Response' addButtonText='Add Response' itemsList={this.props.responses} />
                </CardDeck>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

ShowApi.propTypes = {
  showAlert: PropTypes.bool,
  alertMessage: PropTypes.string,
  api: PropTypes.object.isRequired,
  version: PropTypes.object.isRequired,
  params: PropTypes.array,
  showHeaders: PropTypes.bool,
  headers: PropTypes.array,
  showHeaders: PropTypes.bool,
  bodies: PropTypes.array,
  showBodies: PropTypes.bool,
  responses: PropTypes.array,
  showResponses: PropTypes.bool,
}

export default ShowApi
