import React from "react"
import PropTypes from "prop-types"
import ListGroup from 'react-bootstrap/ListGroup'
class ShowCaseListItem extends React.Component {
  render () {
    return (
      <ListGroup.Item style={this.props.style}>
        {this.props.itemName}
      </ListGroup.Item>
    );
  }
}

ShowCaseListItem.propTypes = {
  style: PropTypes.object,
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
}

export default ShowCaseListItem
