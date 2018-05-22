import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import MainNav from './Components/Navbar';
import Plots from './Components/Plots';
import LoginModal from './Components/LoginModal'
import { connect} from 'react-redux';
import { addProperty, login, logout } from "./actions"

class App extends React.Component {
  constructor() {
    super();
    this.state = {showLogin: false};
  }

  componentDidUpdate(nextProps, nextState) {
    if(this.props.userId != nextProps.userId){
      this.setState({showLogin: false});
    }
  }

  render() {
    return (
      <div>
         <MainNav onLoginClicked={() => this.setState({showLogin: true})}
          userId={this.props.userId}
          onLogoutClicked={this.props.logout}/>
          <Plots/>
          <LoginModal showLogin={this.state.showLogin} 
              onClose={() => this.setState({showLogin: false})}
              onLoginClicked={(address, password) => this.props.login(address, password)}/>    
        <p>Let's Go!</p>
        <Button onClick={() => {
          this.props.addProperty({name: 'new property'});
          this.props.login("0x04cd700dae4bbd9183225123fa7523e6c29604ac", "asdfg");
          }}>Test</Button>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
      properties: state.properties,
      userId: state.userId
  } 
}

export default connect(mapStateToProps, {addProperty, login, logout})(App);

