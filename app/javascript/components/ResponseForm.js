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
      showDeleteButton: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
  }

  componentDidMount() {
    if (this.props.item) {
      const item = this.props.item
      this.setState({
        formData: {
          ...this.state.formData, ...{
            code: item.code,
            status: item.status,
            data: item.data,
            description: item.description,
          }
        },
        showDeleteButton: true,
      })
    }
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
    if (this.props.item) {
      const id = this.props.item.id
      axios.patch(`/responses/${id}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log(response);
          this.props.handleItemsList(response.data)
          const alert = {
            alertType: 'success',
            showAlert: true,
            alertMessage: "Successfully Updated"
          }
          this.props.showAlert(alert)
        }, (error) => {
          console.log(error);
          const alert = {
            alertType: 'error',
            showAlert: true,
            alertMessage: "Error Updating"
          }
          this.props.showAlert(alert)
        });
    }
    else {
      axios.post('/responses', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log(response);
          this.props.handleItemsList(response.data)
          const alert = {
            alertType: 'success',
            showAlert: true,
            alertMessage: "Successfully Created"
          }
          this.props.showAlert(alert)
        }, (error) => {
          console.log(error);
          const alert = {
            alertType: 'error',
            showAlert: true,
            alertMessage: "Error Creating"
          }
          this.props.showAlert(alert)
        });
    }
  }

  deleteRecord(event) {
    event.preventDefault();
    const id = this.props.item.id
    axios({
      method: 'DELETE',
      url: `/responses/${id}`,
      data: { authenticity_token: $('meta[name="csrf-token"]').attr('content') }
    })
      .then((response) => {
        console.log(response.data);
        this.props.handleItemsList(response.data)
        const alert = {
          alertType: 'success',
          showAlert: true,
          alertMessage: "Successfully Deleted"
        }
        this.props.showAlert(alert)
      }, (error) => {
        console.log(error);
        const alert = {
          alertType: 'error',
          showAlert: true,
          alertMessage: "Error Deleting"
        }
        this.props.showAlert(alert)
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

    const deleteBtnStyle = {
      marginLeft: '32px',
    }

    return (
      <Form onSubmit={this.handleSubmit} >
        <FormTextField
          controlId='Code'
          label='Code' type='text'
          placeholder='Eg: 200 | 404 | 500 . . .'
          name='code'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.code}
          required={true}
        />
        <FormTextField
          controlId='Status'
          label='Status' type='text'
          placeholder='Eg: Success | Error | Forbidden . . .'
          name='status'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.status}
          required={true}
        />
        <FormTextArea
          controlId='DataField'
          label='Data' type='textarea'
          rows={4}
          name='data'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.data}
          required={true}
        />
        <FormTextArea
          controlId='DescriptionField'
          label='Description' type='textarea'
          rows={2}
          name='description'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.description}
          required={true}
        />
        <div style={saveButtonStyle}>
          <Button variant="dark" type="submit">Save</Button>
          {this.state.showDeleteButton && <Button variant="danger" style={deleteBtnStyle} onClick={this.deleteRecord} >Delete</Button>}
        </div>
      </Form>
    );
  }
}

ResponseForm.propTypes = {
  apiId: PropTypes.number,
  handleItemsList: PropTypes.func,
  item: PropTypes.object,
  showAlert: PropTypes.func,
}

export default ResponseForm
