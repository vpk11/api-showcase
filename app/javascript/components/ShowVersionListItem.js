import React from "react"
import PropTypes from "prop-types"
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col } from 'react-bootstrap'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ArchiveIcon from '@material-ui/icons/Archive'
import axios from "axios"

class ShowVersionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = method => e => {
    e.stopPropagation();
    e.preventDefault();
    const id = this.props.itemId;
    console.log("clicked " + method);
    axios({
      method: method,
      url: `/versions/${id}`,
      data: { authenticity_token: $('meta[name="csrf-token"]').attr('content') }
    })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.props.handleVersionListClick(response.data);
      });
  };

  render() {
    const deleteButtonStyle = {
      fill: '#ff1744'
    }
    const archiveButtonStyle = {
      fill: '#2979ff'
    }
    const versionNameStyle = {
      textAlign: 'centre',
      marginTop: '10px'
    }

    return (
      <ListGroup.Item style={this.props.style} onClick={() => console.log('clicked')} >
        <Row>
          <Col>
            <h5 style={versionNameStyle}><a href={"http://localhost:3000/versions/" + this.props.itemId}>{this.props.itemName}</a></h5>
          </Col>
          <IconButton aria-label="delete" onClick={this.handleChange('DELETE')}> <DeleteIcon style={deleteButtonStyle} />
          </IconButton>
          <IconButton aria-label="archive" onClick={this.handleChange('PATCH')}> <ArchiveIcon style={archiveButtonStyle} />
          </IconButton>
        </Row>
      </ListGroup.Item>

    );
  }
}

ShowVersionListItem.propTypes = {
  style: PropTypes.object,
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  item: PropTypes.object,
  handleVersionListClick: PropTypes.func
}

export default ShowVersionListItem
