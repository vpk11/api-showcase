import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormTextField from './FormTextField'
import FormTextArea from './FormTextArea'
import axios from 'axios'

class ResponseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        api_id: this.props.apiId,
        authenticity_token: $('meta[name="csrf-token"]').attr('content'),
      },
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
    axios.post('/responses', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
      console.log(response);
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
          controlId='Code'
          label='Code' type='text'
          placeholder='Eg: 200 | 404 | 500 . . .'
          name='code'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.code}
        />
        <FormTextField
          controlId='Status'
          label='Status' type='text'
          placeholder='Eg: Success | Error | Forbidden . . .'
          name='status'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.status}
        />
        <FormTextArea
          controlId='DataField'
          label='Data' type='textarea'
          rows={4}
          name='data'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.data}
        />
        <FormTextArea
          controlId='DescriptionField'
          label='Description' type='textarea'
          rows={2}
          name='description'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.description}
        />
        <Button variant="dark" style={saveButtonStyle} type="submit" >Save</Button>
      </Form>
    );
  }
}

ResponseForm.propTypes = {
  apiId: PropTypes.number,
  handleItemsList: PropTypes.func,
  item: PropTypes.object,
}

export default ResponseForm
