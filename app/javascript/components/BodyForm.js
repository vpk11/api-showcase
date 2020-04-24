import React from "react"
import PropTypes from "prop-types"
import Form from 'react-bootstrap/Form'
import FormTextField from './FormTextField'
import FormTextArea from './FormTextArea'
import FormSelect from './FormSelect'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
class BodyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        api_id: this.props.apiId,
        authenticity_token: $('meta[name="csrf-token"]').attr('content'),
        body_type: 'none',
        data_type: 'Text',
      },
      bodyType: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const data = {};
    data[event.target.name] = event.target.value;
    this.setState({ formData: { ...this.state.formData, ...data } });

    if (event.target.name == 'body_type'){
      this.setState({bodyType: event.target.value})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = new FormData()
    for (let [key, value] of Object.entries(this.state.formData)) {
      form.set(key, value)
    }
    axios.post('/bodies', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
      console.log(response);
      this.props.handleItemsList(response.data)
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    const saveButtonStyle = {
      marginTop: '32px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    };
    const BODY_TYPE = ['none', 'form-data', 'x-www-form-urlencoded', 'raw', 'GraphQL']
    const DATA_TYPE = ['Text', 'JavaScript', 'JSON', 'HTML','XML']

    return (
      <Form onSubmit={this.handleSubmit} >
        <FormSelect
          controlId='BodySelect'
          label='Body Type' type='select'
          options={BODY_TYPE}
          name='body_type'
          onChange={this.handleChange}
        />
        { 
          (this.state.bodyType == 'form-data' || this.state.bodyType == 'x-www-form-urlencoded') &&
            <FormTextField
              controlId='KeyField'
              label='Key' type='text'
              placeholder='Key'
              name='key'
              onChange={this.handleChange}
            />
        } 
        {
          (this.state.bodyType == 'form-data' || this.state.bodyType == 'x-www-form-urlencoded') &&
            <FormTextField
              controlId='ValueObject'
              label='Type' type='text'
              placeholder='String|Integer|Boolean . . .'
              name='value_object'
              onChange={this.handleChange}
            />
        }
        {
          (this.state.bodyType == 'raw') &&
          <FormSelect
            controlId='DataTypeSelect'
            label='Type' type='select'
            options={DATA_TYPE}
            name='data_type'
            onChange={this.handleChange}
          />
        }
        {
          (this.state.bodyType == 'raw') &&
            <FormTextArea
              controlId='DataField'
              label='Data' type='textarea'
              rows={3}
              name='data'
              onChange={this.handleChange}
            />
        }
        {
          this.state.bodyType == 'GraphQL' &&
            <FormTextArea
              controlId='GraphQLQueryField'
              label='GraphQL Query' type='textarea'
              rows={3}
              name='graphql_query'
              onChange={this.handleChange}
            />
        }
        {
          this.state.bodyType == 'GraphQL' &&
            <FormTextArea
              controlId='GraphQLVariablesField'
              label='GraphQL Variables' type='textarea'
              rows={2}
              name='graphql_variables'
              onChange={this.handleChange}
            />
        }
        {
          (this.state.bodyType == 'form-data' || this.state.bodyType == 'x-www-form-urlencoded' || this.state.bodyType == 'GraphQL' || this.state.bodyType == 'raw') &&
            <FormTextArea
              controlId='DescriptionField'
              label='Description' type='textarea'
              rows={2}
              name='description'
              onChange={this.handleChange}
            />
        }
        <Button variant="dark" style={saveButtonStyle} type="submit">Save</Button>
      </Form>
    );
  }
}

BodyForm.propTypes = {
  apiId: PropTypes.number,
  handleItemsList: PropTypes.func,
}

export default BodyForm
