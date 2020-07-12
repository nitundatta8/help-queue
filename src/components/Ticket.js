import React from "react";
import PropTypes from "prop-types";


function Ticket(props) {
  const styledComponent = {
    border: '2px black solid',
    borderRadius: '15px',
    maxWidth: '400px',
    margin: '5px'
  }

  return (
    <div style={styledComponent}>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func, // new PropType
  formattedWaitTime: PropTypes.string
};
export default Ticket;
