import React from "react"
import PropTypes from "prop-types"
import ListGroup from 'react-bootstrap/ListGroup'
class VersionsList extends React.Component {
  render () {
    return (
      <ListGroup.Item>
        {this.props.versionName}
      </ListGroup.Item>
    );
  }
}

VersionsList.propTypes = {
  versionId: PropTypes.number,
  versionName: PropTypes.string,
}

export default VersionsList
