import React from "react";
import { Jumbotron, ControlLabel, FormControl, Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeContractAddress, clearContractAddress } from "../actions"

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAlert: true
        }
        this.onkeyPress = this.onkeyPress.bind(this);
        this.dismissAlert = this.dismissAlert.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
    }

    onkeyPress(evt) {
        if (evt.keyCode == 13) {
            this.props.changeContractAddress(evt.target.value);
        }
    }

    changeAddress() {
        this.props.clearContractAddress();
    }

    dismissAlert() {
        this.setState({ showAlert: false });
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.contractAddress !== this.props.contractAddress) {
            this.setState({ showAlert: true });
        }
    }

    render() {
        return (

            <Jumbotron className="header">
                <div className="text-center">
                    <ControlLabel className="text-left full-width">Contract Address</ControlLabel>
                    {this.props.contractAddress && this.props.contractAddressValid ?
                        <span className="pull-left"><label>{this.props.contractAddress}</label>
                        <Button onClick={this.changeAddress} bsStyle="link">Change</Button></span>
                        : <FormControl
                            type="text"
                            placeholder="Enter your contract address and press enter."
                            onKeyDown={this.onkeyPress}
                        />}
                    {this.state.showAlert && this.props.contractAddress && !this.props.contractAddressValid ?
                        <Alert bsStyle="danger" onDismiss={this.dismissAlert}>
                            <h4>Oh snap!</h4>
                            <p>
                                The Contract address you entered is not valid.
          </p>
                        </Alert> : null}
                </div>
            </Jumbotron>
        );
    }
}

let mapStateToProps = (state, props) => {
    return {
        contractAddress: state.contract ? state.contract.contractAddress : null,
        contractAddressValid: state.contract ? state.contract.contractAddressValid : false
    }
}

export default connect(mapStateToProps, {changeContractAddress, clearContractAddress})(Header);