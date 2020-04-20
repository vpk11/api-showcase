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
    const itemsList = this.props.itemsList.map((item) => <ShowCaseListItem itemId={item.id} itemName={item.name}
      key={item.id} />);

    return (
      <>
        <Card>
          <Card.Header>{this.props.cardTitle}</Card.Header>
          <Card.Body>
            <ListGroup>
              {itemsList}
            </ListGroup>
            <Button variant="primary" size="sm" onClick={() => this.setState({ modalShow: true })}>{this.props.addButtonText}</Button>
          </Card.Body>
        </Card>
        <VerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </>
    );
  }
}

ApiDetailsCard.propTypes = {
  cardTitle: PropTypes.string,
  addButtonText: PropTypes.string,
  itemsList: PropTypes.array.isRequired,
  buttonID: PropTypes.string.isRequired,
}

export default ApiDetailsCard
