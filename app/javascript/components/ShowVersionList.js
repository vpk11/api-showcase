import React from "react"
import PropTypes from "prop-types"
import Accordion from 'react-bootstrap/Accordion'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ShowVersionListItem from "./ShowVersionListItem"
import axios from "axios"
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ArchiveIcon from '@material-ui/icons/Archive'

class ShowVersionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: props.projectId,
      versions: props.versions
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = method => e => {
    e.stopPropagation();
    e.preventDefault();
    const id = this.props.projectId;
    console.log("clicked " + method);
    axios({
      method: method,
      url: `/projects/${id}`,
      data: { authenticity_token: $('meta[name="csrf-token"]').attr('content') }
    })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.props.handleChildClick(response.data);
      });
  };

  render() {
    const containerMarginStyle = {
      marginTop: '32px',
    };
    const deleteButtonStyle = {
      fill: '#ff1744'
    }
    const archiveButtonStyle = {
      fill: '#2979ff'
    }
    const colStyle = {
      backgroundColor: '#343a40'
    }
    const projectnameStyle = {
      textAlign: 'centre',
      marginTop: '10px',
      color: '#fff',
    }
    const aboutStyle = {
      whiteSpace: 'pre-wrap',
      wordwrap: 'break-word',
      fontSize: '1.1rem'
    }

    const versionsList = this.state.versions.map((version) => <ShowVersionListItem itemId={version.id} itemName={version.name}
      key={version.id} handleVersionListClick={(versions) => {
        this.setState({ versions: versions })
      }} />);
    return (
      <Accordion style={containerMarginStyle} defaultActiveKey="0" >
        <Card>
          <Accordion.Toggle as={Card.Header} style={colStyle} eventKey="0">
            <Row>
              <Col>
                <h4 style={projectnameStyle}>{this.props.projectName}</h4>
              </Col>
              <IconButton aria-label="delete" onClick={this.handleChange('DELETE')}> <DeleteIcon style={deleteButtonStyle} />
              </IconButton>
              <IconButton aria-label="archive" onClick={this.handleChange('PATCH')}> <ArchiveIcon style={archiveButtonStyle} />
              </IconButton>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup>
                <Card body><xmp style={aboutStyle}>   {this.props.projectDescription}</xmp></Card>
              </ListGroup>
              <ListGroup style={containerMarginStyle}>
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
  projectDescription: PropTypes.string.isRequired,
  versions: PropTypes.array.isRequired,
  item: PropTypes.object,
  handleChildClick: PropTypes.func
}

export default ShowVersionList
