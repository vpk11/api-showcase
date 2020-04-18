import React from "react"
import PropTypes from "prop-types"
import ListGroup from 'react-bootstrap/ListGroup'
class ShowCaseListItem extends React.Component {
  render () {
    return (
      <ListGroup.Item>
        {this.props.versionName}
      </ListGroup.Item>
    );
  }
}

ShowCaseListItem.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
}

export default ShowCaseListItem
