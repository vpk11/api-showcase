import React from "react"
import PropTypes from "prop-types"
import ShowCaseListItem from './ShowCaseListItem'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import VerticallyCenteredModal from './VerticallyCenteredModal'
class ApiDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    }
  }

  render() {
    const addButtonStyle = {
      marginTop: '32px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    };

    const listItemStyle = {
      fontSize: 'small'
    }

    const itemsList = this.props.itemsList.map((item) => <ShowCaseListItem style={listItemStyle} itemId={item.id} itemName={item.key}
      key={item.id} />);

    return (
      <>
        <Card>
          <Card.Header>{this.props.cardTitle}</Card.Header>
          <Card.Body>
            <ListGroup>
              {itemsList}
            </ListGroup>
            <Button style={addButtonStyle} variant="primary" size="sm" onClick={() => this.setState({ modalShow: true })}>{this.props.addButtonText}</Button>
          </Card.Body>
        </Card>
        <VerticallyCenteredModal
          modalTitle={this.props.cardTitle}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          buttonID={this.props.buttonID}
          apiId={this.props.apiId}
        />
      </>
    );
  }
}

ApiDetailsCard.propTypes = {
  cardTitle: PropTypes.string,
  addButtonText: PropTypes.string,
  itemsList: PropTypes.array,
  buttonID: PropTypes.string.isRequired,
  apiId: PropTypes.number,
}

export default ApiDetailsCard
