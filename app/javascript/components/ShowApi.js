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
      alert: {
        alertType: 'success',
        showAlert: props.showAlert,
        alertMessage: props.alertMessage
      }
    }
    this.onCloseAlert = this.onCloseAlert.bind(this);
    this.setAlert = this.setAlert.bind(this);
  }

  onCloseAlert() {
    this.setState({
      alert: {
        ...this.state.alert, ...{ showAlert: false }
      }
    })
  }

  setAlert(alert) {
    this.setState({ alert: alert })
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
            {this.state.alert.showAlert && <DismissibleAlert type='success' alertHeading={`🦄 ${this.state.alert.alertMessage}`} onClose={this.onCloseAlert} />}
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
                  <ApiDetailsCard buttonID='addParams' cardTitle='Params' addButtonText='Add Params' itemsList={this.props.params} apiId={this.props.api.id} showAlert={this.setAlert} />

                  <ApiDetailsCard buttonID='addHeaders' cardTitle='Headers' addButtonText='Add Headers' itemsList={this.props.headers} apiId={this.props.api.id} showAlert={this.setAlert} />

                  <ApiDetailsCard buttonID='addBody' cardTitle='Body' addButtonText='Add Body' itemsList={this.props.bodies} apiId={this.props.api.id} showAlert={this.setAlert} />

                  <ApiDetailsCard buttonID='addResponse' cardTitle='Response' addButtonText='Add Response' itemsList={this.props.responses} apiId={this.props.api.id} showAlert={this.setAlert} />
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
  headers: PropTypes.array,
  bodies: PropTypes.array,
  responses: PropTypes.array,
}

export default ShowApi
