import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
import FormTextField from './FormTextField'
import FormTextArea from './FormTextArea'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
class HeaderAndParamsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { 
        api_id: this.props.apiId,
        form_for: this.props.formFor,
        authenticity_token: $('meta[name="csrf-token"]').attr('content')
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const data = {};
    data[event.target.name] = event.target.value;
    this.setState({ formData: { ...this.state.formData, ...data } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = new FormData()
    for (let [key, value] of Object.entries(this.state.formData)) {
      form.set(key, value)
    }
    axios.post(`/${this.props.formFor}`, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
      console.log(response.data);
      this.props.handleItemsList(response.data)
    }, (error) => {
      console.log(error);
    });
  }

  render () {
    const saveButtonStyle = {
      marginTop: '32px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    };

    return (
      <Form onSubmit={this.handleSubmit} >
        <FormTextField
          controlId='KeyField'
          label='Key' type='text'
          placeholder='Key'
          name='key'
          onChange={this.handleChange}
        />
        <FormTextField
          controlId='ValueObject'
          label='Type' type='text'
          placeholder='String|Integer|Boolean . . .'
          name='value_object'
          onChange={this.handleChange}
        />
        <FormTextArea
          controlId='DescriptionField'
          label='Description' type='textarea'
          rows={2}
          name='description'
          onChange={this.handleChange}
        />
        <Button variant="dark" style={saveButtonStyle} type="submit">Save</Button>
      </Form>
    );
  }
}

HeaderAndParamsForm.propTypes = {
  apiId: PropTypes.number,
  formFor: PropTypes.string,
  handleItemsList: PropTypes.func,
}

export default HeaderAndParamsForm
