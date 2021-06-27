import React from "react"
import PropTypes from "prop-types"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import ShowCaseListItem from "./ShowCaseListItem"
import { Row, Col, Button } from "react-bootstrap"
import axios from "axios"
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ArchiveIcon from '@material-ui/icons/Archive'
import humps from 'humps';

class ApiIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = method => e => {
    e.stopPropagation();
    e.preventDefault();
    const id = this.props.apiId;
    console.log("clicked " + method);
    const url = method == 'DELETE' ? `/apis/${id}` : `/apis/${id}/archive`
    axios({
      method: method,
      url: url,
      headers: { Record: 'Api', authenticity_token: $('meta[name="csrf-token"]').attr('content') }
    })
      .then((response) => {
        console.log(response);
        console.log(humps.camelizeKeys(response.data));
        this.props.handleChildClick(humps.camelizeKeys(response.data));
      });
  };

  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const eachDetailsCard = {
      marginBottom: '32px',
    };
    const deleteButtonStyle = {
      fill: '#ff1744'
    }
    const archiveButtonStyle = {
      fill: '#2979ff'
    }
    const editApiButtonStyle = {
      float: 'right'
    };
    const paramsList = this.props.parameters.map((param) => <ShowCaseListItem itemId={param.id} itemName={param.key}
      key={param.id} onClick={(param) => (param)} />);
    const headerList = this.props.headers.map((header) => <ShowCaseListItem itemId={header.id} itemName={header.key}
      key={header.id} onClick={(header) => (header)} />);
    const bodyList = this.props.bodies.map((body) => <ShowCaseListItem itemId={body.id} itemName={body.key}
      key={body.id} onClick={(body) => (body)} />);
    const responseList = this.props.responses.map((response) => <ShowCaseListItem itemId={response.id} itemName={response.code}
      key={response.id} onClick={(response) => (response)} />);

    return (
      <Card style={containerMarginStyle}>
        <Accordion>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <Row><Col><b>{this.props.apiMethod}</b> {this.props.apiEndPoint}</Col>
              <IconButton aria-label="delete" onClick={this.handleChange('DELETE')}> <DeleteIcon style={deleteButtonStyle} />
              </IconButton>
              <IconButton aria-label="archive" onClick={this.handleChange('PATCH')}> <ArchiveIcon style={archiveButtonStyle} />
              </IconButton>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row>
                <Col sm={8}>
                  <div style={eachDetailsCard}>
                    <h6>Description</h6>
                    <div>{this.props.apiDescription}</div>
                  </div>
                </Col>
                <Col sm={4}>
                <Button variant="outline-primary" style={editApiButtonStyle} href={`/apis/${this.props.apiId}/edit`}>Edit</Button>
                </Col>
              </Row>
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
  item: PropTypes.object,
  handleChildClick: PropTypes.func
}

export default ApiIndex