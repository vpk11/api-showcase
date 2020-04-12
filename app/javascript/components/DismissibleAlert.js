import React from "react"
import PropTypes from "prop-types"
import Alert from 'react-bootstrap/Alert'
class DismissibleAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    };
  }

  render() {
    const alertDisplay = {
      display: (this.state.show == 'true' ? 'block' : 'none')
    }

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
      <Alert style={alertDisplay} variant={type} onClose={() => this.setState({ show: false })} dismissible>
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
}

export default DismissibleAlert
