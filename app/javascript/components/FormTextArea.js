import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
class FormTextArea extends React.Component {
  render () {
    return (
      <Form.Group controlId={this.props.controlId}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control onChange={this.props.onChange} as={this.props.type} rows={this.props.rows} name={this.props.name} defaultValue={this.props.defaultValue} />
      </Form.Group>
    );
  }
}

FormTextArea.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormTextArea
