import React from 'react'

function DebuggingLesson(props) {
  return (
    <React.Fragment>
      <h1>Page Count: {props.pageCount}</h1>
      <h3>{"Have you gone through all the steps on the Learn How to Program debugging lesson?"}</h3>
    </React.Fragment>
  );
}
export default DebuggingLesson;

/*


------------------ Ticketcontrol ---------------------
import React from 'react'
import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'
import DebuggingLesson from './DebuggingLesson'

class TicketControl extends React.Component {
  constructor(probs) {
    super(probs);
    this.state = {
      //formVisibleOnPage: false,
      stateCount: 0
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState(prevState => ({
      stateCount: ((prevState.stateCount || 0) + 1) % 3
      //formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    console.log("Pagecount=" + this.state.stateCount)
    if (this.state.stateCount === 0) {

      currentlyVisibleState = <TicketList pageCount={this.state.stateCount} />
      buttonText = "Add Tricket";
    } else if (this.state.stateCount === 1) {

      currentlyVisibleState = <DebuggingLesson pageCount={this.state.stateCount} />
      buttonText = "Debugging  Lesson";

    } else if (this.state.stateCount === 2) {

      currentlyVisibleState = <NewTicketForm pageCount={this.state.stateCount} />
      buttonText = "Return to Ticket List";

    } else {
      //nothing
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}
export default TicketControl;

*/
