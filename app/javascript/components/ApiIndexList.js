import React from "react"
import PropTypes from "prop-types"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import ShowCaseListItem from "./ShowCaseListItem"

class ApiIndex extends React.Component {
  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const eachDetailsCard = {
      marginBottom: '32px',
    };
    const paramsList = this.props.parameters.map((param) => <ShowCaseListItem itemId={param.id} itemName={param.key} key={param.id}
      onClick={(param) => (param)} />);
    const headerList = this.props.headers.map((header) => header.key);
    const bodyList = this.props.bodies.map((body) => body.key);
    const responseList = this.props.responses.map((response) => response.key);

    return (
      <Card style={containerMarginStyle}>
        <Accordion>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Api: {this.props.apiId}

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div style={eachDetailsCard}>
                <h6>Method</h6>
                <div>{this.props.apiMethod}</div>
              </div>
              <div style={eachDetailsCard}>
                <h6>Endpoint</h6>
                <div>{this.props.apiEndPoint}</div>
              </div>
              <div style={eachDetailsCard}>
                <h6>Description</h6>
                <div>{this.props.apiDescription}</div>
              </div>
              <CardDeck>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Params
                  </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body><ListGroup>
                        {paramsList}
                      </ListGroup></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      Header
                  </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body><ListGroup>
                        {headerList}
                      </ListGroup></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      Body
                  </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body><ListGroup>
                        {bodyList}
                      </ListGroup></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                      Response
                  </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body><ListGroup>
                        {responseList}
                      </ListGroup></Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </CardDeck>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </Card>
    );
  }
}

ApiIndex.propTypes = {
  apiId: PropTypes.number.isRequired,
  apiMethod: PropTypes.string.isRequired,
  apiEndPoint: PropTypes.string.isRequired,
  apiDescription: PropTypes.string.isRequired,
  parameters: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  bodies: PropTypes.array.isRequired,
  responses: PropTypes.array.isRequired,
  item: PropTypes.object
}

export default ApiIndex