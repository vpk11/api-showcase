import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
class FormSelect extends React.Component {
  render () {
    const opts = this.props.options.map((opt) => <option key={opt}>{opt}</option>);

    return (
      <Form.Group controlId={this.props.controlId}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control onChange={this.props.onChange} as={this.props.type} name={this.props.name} value={this.props.value}>
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
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormSelect
