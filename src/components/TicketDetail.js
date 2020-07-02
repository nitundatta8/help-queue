import React from 'react'

import PropType from 'prop-types'

function TicketDetails(probs) {
  const { ticket, onClickingDelete } = probs;
  //ticket = probs;
  return (
    <React.Fragment>
      <h3>Ticket Detail</h3>
      <p>{ticket.location} - {ticket.names}</p>
      <p><em>{ticket.issue}</em></p>
      <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr />
    </React.Fragment>
  );
}
TicketDetails.prototype = {
  ticket: PropType.object,
  onClickingDelete: PropType.func
};
export default TicketDetails;