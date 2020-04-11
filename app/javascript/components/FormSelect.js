import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
class FormSelect extends React.Component {
  render () {
    const opts = this.props.options.map((opt) => <option>{opt}</option>);

    return (
      <Form.Group controlId={this.props.controlId}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control as={this.props.type} name={this.props.name}>
          {opts}
        </Form.Control>
      </Form.Group>
    );
  }
}

FormSelect.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default FormSelect
