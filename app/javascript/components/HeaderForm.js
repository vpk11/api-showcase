import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
class HeaderForm extends React.Component {
  render() {
    return (
      <Form action="/headers" method="POST" >
        <FormTextField controlId='HeadersKeyField0' label='Key' type='text' placeholder='Key' name={`headers[${0}][key]`} />
        <FormTextField controlId='HeadersValueObjectField0' label='Object' type='text' placeholder='Object' name={`headers[${0}][value_object]`} />
        <FormTextArea controlId='HeadersDescriptionField0' label='Description' type='textarea' placeholder='Description' name={`headers[${0}][description]`} />
        <Button variant="secondary" size="sm">New Header</Button>
      </Form>
    );
  }
}

export default HeaderForm
