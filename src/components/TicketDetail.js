import React from 'react'

import PropType from 'prop-types'

function TicketDetails(props) {
  const { ticket, onClickingDelete } = props;
  //ticket = probs;
  return (
    <React.Fragment>
      <h3>Ticket Detail</h3>
      <p>{ticket.location} - {ticket.names}</p>
      <p><em>{ticket.issue}</em></p>
      <button onClick={() => props.onClickingDelete(ticket.id)}>Close Ticket</button>
      <button onClick={props.onClickingEdit}>Update Ticket</button>
      <hr />
    </React.Fragment>
  );
}
TicketDetails.prototype = {
  ticket: PropType.object,
  onClickingDelete: PropType.func,
  onClickingEdit: PropType.func
};
export default TicketDetails;