import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
class FormTextField extends React.Component {
  render() {
    return (
      <Form.Group controlId={this.props.controlId}>
        <Form.Label>{this.props.label}</Form.Label>
        {this.props.required ?
          <Form.Control onChange={this.props.onChange} type={this.props.type} placeholder={this.props.placeholder} name={this.props.name} defaultValue={this.props.defaultValue} required /> :
          <Form.Control onChange={this.props.onChange} type={this.props.type} placeholder={this.props.placeholder} name={this.props.name} defaultValue={this.props.defaultValue} />
        }
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
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}

export default FormTextField
