
export const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const updateTime = (id, formattedWaitTime) => ({
  type: 'UPDATE_TIME',
  id: id,
  formattedWaitTime: formattedWaitTime
});

export const addTicket = (ticket) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;
  return {
    type: 'ADD_TICKET',
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime,
    timeOpen: timeOpen
  }
}