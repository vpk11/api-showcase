import React from "react"
import PropTypes from "prop-types"
import ListGroup from 'react-bootstrap/ListGroup'
class ShowVersionListItem extends React.Component {
  render () {
    return (
      <ListGroup.Item style={this.props.style} onClick={() => console.log('clicked')} >
        <a href={"http://localhost:3000/versions/" +this.props.itemId}>{this.props.itemName}</a>
      </ListGroup.Item>
    );
  }
}

ShowVersionListItem.propTypes = {
  style: PropTypes.object,
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  item: PropTypes.object,
}


export default ShowVersionListItem
