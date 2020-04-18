import React from "react"
import PropTypes from "prop-types"
import ShowCaseListItem from './ShowCaseListItem'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
class ApiDetailsCard extends React.Component {
  render() {
    const itemsList = this.props.itemsList.map((item) => <ShowCaseListItem itemId={item.id} itemName={item.name}
      key={item.id} />);

    return (
      <Card>
        <Card.Header>{this.props.cardTitle}</Card.Header>
        <Card.Body>
          <ListGroup>
            {itemsList}
          </ListGroup>
          <Button variant="primary" size="sm">{this.props.addButtonText}</Button>
        </Card.Body>
      </Card>
    );
  }
}

ApiDetailsCard.propTypes = {
  cardTitle: PropTypes.string,
  addButtonText: PropTypes.string,
  itemsList: PropTypes.array.isRequired
}

export default ApiDetailsCard
