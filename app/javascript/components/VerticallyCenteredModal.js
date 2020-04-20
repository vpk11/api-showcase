import React from "react"
import PropTypes from "prop-types"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class VerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        size="lg"
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

VerticallyCenteredModal.propTypes = {
  modalTitle: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
}

export default VerticallyCenteredModal
