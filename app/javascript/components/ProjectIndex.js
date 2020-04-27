import React from "react"
import PropTypes from "prop-types"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowCaseListItem from './ShowCaseListItem'
class ProjectIndex extends React.Component {
  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const apisList = this.props.versions.map((version) => <ShowCaseListItem itemId={version.id} itemName={version.name}
      key={version.id} />);
    return (
      <Container style={containerMarginStyle}>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  {this.props.projectName}
                  
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ListGroup>
                      {apisList}
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
  }
}

ProjectIndex.propTypes = {
  projectId: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
  versions: PropTypes.array.isRequired,
}

export default ProjectIndex
