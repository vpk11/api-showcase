import React from "react"
import PropTypes from "prop-types"
class ParamsForm extends React.Component {
  render () {
    return (
      <Form action="/params" method="POST">
          <FormTextField controlId='ParamsKeyField0' label='Key' type='text' placeholder='Key' name={`params[${0}][key]`} />
          <FormTextField controlId='ParamsValueObjectField0' label='Object' type='text' placeholder='Object' name={`params[${0}][value_object]`} />
          <FormTextArea controlId='ParamsDescriptionField0' label='Description' type='textarea' placeholder='Description' name={`params[${0}][description]`} />
          <Button variant="secondary" size="sm">New Params</Button>
      </Form>
    );
  }
}

export default ParamsForm
