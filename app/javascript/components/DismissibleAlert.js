import React from "react"
import PropTypes from "prop-types"
import Alert from 'react-bootstrap/Alert'
class DismissibleAlert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const alertType = {
      'primary': 'primary',
      'secondary': 'secondary',
      'success': 'success',
      'error': 'danger',
      'warning': 'warning',
      'info': 'info',
      'light': 'light',
      'dark': 'dark',
    }

    const type = this.props.type ? alertType[this.props.type] : alertType.primary

    return (
      <Alert show={true} variant={type} onClose={this.props.onClose} dismissible>
        <Alert.Heading>{this.props.alertHeading}</Alert.Heading>
        <ul>
          {this.props.alertList && this.props.alertList.map(alert => <li>{alert}</li>)}
        </ul>
      </Alert>
    );
  }
}

DismissibleAlert.propTypes = {
  alertList: PropTypes.array,
  alertHeading: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
}

export default DismissibleAlert
