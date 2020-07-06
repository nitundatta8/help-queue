import React from 'react'
import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'
import TicketDetail from './TicketDetail'
import EditTicketForm from './EditTicketForm'
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class TicketControl extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = {
      formVisibleOnPage: false,
      // masterTicketList: [],
      selectedTicket: null,
      editing: false
    };
  }
  handleAddingNewTicketToList = (newTicket) => {
    //const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    const { dispatch } = this.props;
    const { id, names, location, issue } = newTicket;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue
    };
    dispatch(action);
    this.setState({
      //masterTicketList: newMasterTicketList,
      formVisibleOnPage: false,
      selectedTicket: null // new code
    });
  }
  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({ editing: true })
  };
  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = ticketToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }


  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedTicket: null
    })
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false // new code
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.masterTicketList[id];
    this.setState({ selectedTicket: selectedTicket });
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket}
        onEditTicket={this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket}
        onClickingDelete={this.handleDeletingTicket} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm
        onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />
      buttonText = "Add Tricket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}
TicketControl = connect(mapStateToProps)(TicketControl);
TicketControl.propTypes = {
  masterTicketList: PropTypes.object
};
export default TicketControl;