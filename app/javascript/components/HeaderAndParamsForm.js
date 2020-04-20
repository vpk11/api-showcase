import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
import FormTextField from './FormTextField'
import FormTextArea from './FormTextField'
class HeaderAndParamsForm extends React.Component {
  render () {
    return (
      <Form action="/apis" method="POST" >
        <FormTextField
          controlId='KeyField'
          label='Key' type='text'
          placeholder='Key'
          name='key'
        />
        <FormTextField
          controlId='ValueObject'
          label='Type' type='text'
          placeholder='String|Integer|Boolean . . .'
          name='value_object'
        />
        <FormTextArea
          controlId='DescriptionField'
          label='Description' type='textarea'
          rows={2}
          name='description'
        />
      </Form>
    );
  }
}

export default HeaderAndParamsForm
