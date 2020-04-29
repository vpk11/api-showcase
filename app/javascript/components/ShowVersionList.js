import React from "react"
import PropTypes from "prop-types"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ShowVersionListItem from "./ShowVersionListItem"

class ShowVersionList extends React.Component {
  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const versionsList = this.props.versions.map((version) => <ShowVersionListItem itemId={version.id} itemName={version.name}
      key={version.id} />);
    return (
      <Accordion style={containerMarginStyle} defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {this.props.projectName}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup>
                {versionsList}
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

ShowVersionList.propTypes = {
  style: PropTypes.object,
  projectId: PropTypes.number.isRequired,
  projectName: PropTypes.string.isRequired,
  versions: PropTypes.array.isRequired,
  item: PropTypes.object
}

export default ShowVersionList
