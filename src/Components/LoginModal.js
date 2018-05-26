import React from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LoginModal extends React.Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (<div className="static-modal">
        <Modal show={this.props.showLogin}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>
          <form><FormGroup
          controlId="formBasicText"
            >
          <ControlLabel>Public key/Address</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter your account address"
            onChange={e => this.setState({address: e.target.value})}
          />

          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter your password"
            onChange={e => this.setState({password: e.target.value})}
          />
          <FormControl.Feedback />
        </FormGroup></form>
          </Modal.Body>
      
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Cancel</Button>
            <Button bsStyle="primary" onClick={() => this.props.onLoginClicked(this.state.address, this.state.password)}>Login</Button>
          </Modal.Footer>
        </Modal>
      </div>);
    }
}


  export default LoginModal;