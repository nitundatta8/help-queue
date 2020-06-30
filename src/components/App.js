import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hearder from './Header';
import TicketList from './TicketList';
import TicketControl from './TicketControl'


function App() {
  const name = "Thato";
  const name2 = "Haley";

  return (
    <React.Fragment>
      <Hearder />
      <TicketList />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;
