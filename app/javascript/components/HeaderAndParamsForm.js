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
            key: item.key,
            value_object: item.value_object,
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
      axios.patch(`/${this.props.formFor}/${id}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          console.log(response.data);
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
    } else {
      axios.post(`/${this.props.formFor}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((response) => {
          this.props.handleItemsList(response.data)
          const alert = {
            alertType: 'success',
            showAlert: true,
            alertMessage: "Successfully Created"
          }
          this.props.showAlert(alert)
        }, (error) => {
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
    // axios.delete(`/${this.props.formFor}/${id}`, { authenticity_token: $('meta[name="csrf-token"]').attr('content') })
    axios({
      method: 'DELETE',
      url: `/${this.props.formFor}/${id}`,
      data: { authenticity_token: $('meta[name="csrf-token"]').attr('content')}
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
          controlId='KeyField'
          label='Key' type='text'
          placeholder='Key'
          name='key'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.key}
          required={true}
        />
        <FormTextField
          controlId='ValueObject'
          label='Type' type='text'
          placeholder='String|Integer|Boolean . . .'
          name='value_object'
          onChange={this.handleChange}
          defaultValue={this.props.item && this.props.item.value_object}
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
          {this.state.showDeleteButton && <Button variant="danger" style={deleteBtnStyle} onClick={this.deleteRecord}>Delete</Button>}
        </div>
      </Form>
    );
  }
}

HeaderAndParamsForm.propTypes = {
  apiId: PropTypes.number,
  formFor: PropTypes.string,
  handleItemsList: PropTypes.func,
  item: PropTypes.object,
  showAlert: PropTypes.func,
}

export default HeaderAndParamsForm
