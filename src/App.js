import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';
import MainNav from './Components/Navbar';
import Plots from './Components/Plots';
import LoginModal from './Components/LoginModal'
import SignupModal from './Components/SignupModal'
import { connect} from 'react-redux';
import { addProperty, login, logout, signup } from "./actions"

class App extends React.Component {
  constructor() {
    super();
    this.state = {showLogin: false,
    showSignup: false};
  }

  componentDidUpdate(nextProps, nextState) {
    if(this.props.userId != nextProps.userId){
      this.setState({showLogin: false});
      this.setState({showSignup: false});
    }
  }

  render() {
    return (
      <div>
         <MainNav onLoginClicked={() => this.setState({showLogin: true})}
         onSignupClicked={() => this.setState({showSignup: true})}
          userId={this.props.userId}
          onLogoutClicked={this.props.logout}/>
          <Plots/>
          <LoginModal showLogin={this.state.showLogin} 
              onClose={() => this.setState({showLogin: false})}
              onLoginClicked={(address, password) => this.props.login(address, password)}/> 
          <SignupModal showSignup={this.state.showSignup}
          onClose={() => this.setState({showSignup: false})}
          onsignupClicked={(password) => this.props.signup(password)}/>   
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

export default connect(mapStateToProps, {addProperty, login, logout, signup})(App);

