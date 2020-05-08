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
      modalShow: false,
      itemsList: props.itemsList,
      addButtonStyle: {
        marginTop: '32px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
      },
      item: null,
    }
    this.itemOnClick = this.itemOnClick.bind(this);
  }

  componentDidMount() {
    this.state.itemsList.forEach((item) => {
      if (this.getItemName(item, this.props) == 'none' || this.getItemName(item, this.props) == 'raw' || this.getItemName(item, this.props) == 'GraphQL') {
        this.setState({ addButtonStyle: { ...this.state.addButtonStyle, ...{ display: 'none' } } })
      }
    });
  }

  getItemName = (item, props) => {
    var itemName = ''
    switch (props.buttonID) {
      case 'addParams':
        itemName = item.key
        break;
      case 'addHeaders':
        itemName = item.key
        break;
      case 'addBody':
        if (item.body_type == 'none') {
          itemName = 'none'
        } else if (item.body_type == 'form-data' || item.body_type == 'x-www-form-urlencoded') {
          itemName = item.key
        } else if (item.body_type == 'raw') {
          itemName = 'Data'
        } else if (item.body_type == 'GraphQL') {
          itemName = 'GraphQL Query'
        }
        break;
      case 'addResponse':
        itemName = item.code + ' ' + item.status
        break;
    }
    return itemName
  }

  itemOnClick = (item) => () => {
    this.setState({ modalShow: true })
    this.setState({ item: item })
  }

  render() {
    const listItemStyle = {
      fontSize: 'small',
      cursor: 'pointer',
    }

    const itemsList = this.state.itemsList.map((item) => <ShowCaseListItem key={item.id} style={listItemStyle} itemId={item.id}
      itemName={this.getItemName(item, this.props)} item={item}
      onClick={(item) => this.itemOnClick(item)}
    />);

    return (
      <>
        <Card>
          <Card.Header>{this.props.cardTitle}</Card.Header>
          <Card.Body>
            <ListGroup>
              {itemsList}
            </ListGroup>
            <Button style={this.state.addButtonStyle} variant="primary" size="sm" onClick={() => this.setState({ modalShow: true })}>{this.props.addButtonText}</Button>
          </Card.Body>
        </Card>
        {this.state.modalShow &&
          <VerticallyCenteredModal
            modalTitle={this.props.cardTitle}
            onHide={() => {
              this.setState({ modalShow: false })
              this.setState({ item: null })
            }}
            buttonID={this.props.buttonID}
            apiId={this.props.apiId}
            item={this.state.item}
            handleItemsList={(itemsList) => {
              this.setState({ itemsList: itemsList })
              this.setState({ modalShow: false })
              this.state.itemsList.forEach((item) => {
                if (this.getItemName(item, this.props) == 'none' || this.getItemName(item, this.props) == 'raw' || this.getItemName(item, this.props) == 'GraphQL') {
                  this.setState({ addButtonStyle: { ...this.state.addButtonStyle, ...{ display: 'none' } } })
                  this.setState({ item: null })
                }
              });
            }
            }
            showAlert={this.props.showAlert}
          />
        }
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
  showAlert: PropTypes.func,
}

export default ApiDetailsCard