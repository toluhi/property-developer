import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import MainNav from './Components/Navbar';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const App = () => {
  return (
    <div>
       <MainNav/>
            
      <p>Let's Go!</p>
      <Button>Test</Button>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));