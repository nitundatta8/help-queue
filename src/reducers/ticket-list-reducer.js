import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id, formattedWaitTime, timeopen } = action;
  switch (action.type) {
    case c.ADD_TICKET:
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
    case c.DELETE_TICKET:
      const newState = { ...state };
      delete newState[id];
      return newState;

    case c.UPDARE_TIME:
      const newTicket = Object.assign({}, state[id], { formattedWaitTime })
      const updatedState = Object.assign({}, state, {
        [id]: newTicket
      });
    default:
      return state;
  }
};