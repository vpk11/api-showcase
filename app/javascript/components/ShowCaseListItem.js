import React from "react"
import PropTypes from "prop-types"
import ListGroup from 'react-bootstrap/ListGroup'
class ShowCaseListItem extends React.Component {
  render () {
    return (
      <ListGroup.Item style={this.props.style} onClick={this.props.onClick(this.props.item)} >
        {this.props.itemName}
      </ListGroup.Item>
    );
  }
}

ShowCaseListItem.propTypes = {
  style: PropTypes.object,
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  item: PropTypes.object,
  onClick: PropTypes.func,
}

export default ShowCaseListItem
