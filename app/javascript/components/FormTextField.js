import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
class FormTextField extends React.Component {
  render () {
    return (
      <Form.Group controlId={this.props.controlId}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control type={this.props.type} placeholder={this.props.placeholder} name={this.props.name} value={this.props.value} />
      </Form.Group>
    );
  }
}

FormTextField.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
}

export default FormTextField
