import React from "react"
import PropTypes from "prop-types"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import HeaderAndParamsForm from './HeaderAndParamsForm'
import BodyForm from './BodyForm'
import ResponseForm from './ResponseForm'
class VerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        size="lg"
        show={true}
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
          {this.props.buttonID == 'addParams' && <HeaderAndParamsForm apiId={this.props.apiId} formFor='params' handleItemsList={this.props.handleItemsList} item={this.props.item} />}
          {this.props.buttonID == 'addHeaders' && <HeaderAndParamsForm apiId={this.props.apiId} formFor='headers' handleItemsList={this.props.handleItemsList} item={this.props.item} />}
          {this.props.buttonID == 'addBody' && <BodyForm apiId={this.props.apiId} handleItemsList={this.props.handleItemsList} item={this.props.item} />}
          {this.props.buttonID == 'addResponse' && <ResponseForm apiId={this.props.apiId} handleItemsList={this.props.handleItemsList} item={this.props.item} />}
          
        </Modal.Body>
      </Modal>
    );
  }
}

VerticallyCenteredModal.propTypes = {
  modalTitle: PropTypes.string,
  onHide: PropTypes.func,
  buttonID: PropTypes.string,
  apiId: PropTypes.number,
  handleItemsList: PropTypes.func,
  item: PropTypes.object,
}

export default VerticallyCenteredModal
