import {
     LOGIN_SUCCESSFUL, 
     LOGIN_FAILED, 
     LOGOUT, 
     SIGNUP_SUCCEEDED, 
     SIGNUP_FAILED,
     CHANGE_CONTRACT_ADDRESS, 
     PLOTS_LOADED
} from "../constants/action-types";
import _ from 'lodash';
import Web3 from 'web3';
import abi from '../contracts/landContract.json';


let web3 = new Web3();
web3.setProvider(
    new Web3.providers.WebsocketProvider(
       //TODO: local blockchain websocket address e.g. 'ws://localhost:8546'
    )
);

export const login = (address, password) => {
    return dispatch => {
        //TODO: using web3 login and unlock the account
        console.log('Login not yet implemented');
    }
}

export const logout = () => {
    return dispatch => dispatch({ type: LOGOUT, payload: null });
}

export const signup = (password) => {
    return dispatch => {
        // TODO using web3 create a new accoutn on the blockchain
        console.log('sign up not yet implemented');
    }
}

export const changeContractAddress = (newAddress) => {
    return dispatch => {
        //TODO using web3
        // 1. validate the address is a valid address
        // 2. create an instance of the contract 
        // 3. subscribe to events
        console.log('changeContractAddress not yet implemented');
    }
}

export const clearContractAddress = _ => {
    return dispatch => {
        dispatch({ type: CHANGE_CONTRACT_ADDRESS, payload: { contractAddress: null, contractAddressValid: false, contractInstance: null } })
    }
}

export const buyPlot = (contractInstance, plotId, price, userId) => {
    return dispatch => {
        // TODO: using web invoke the buyPlot function of your smart contract
        console.log('buyPlot not yet implemented');
    }
}

export const sellPlot = (contractInstance, plotId, price, userId) => {
    return dispatch => {
        // TODO: using web invoke the putPlotUpForSale function of your smart contract
        console.log('putPlotUpForSale not yet implemented');
    }
}

export const takeOffMarket = (contractInstance, plotId, userId) => {
    return dispatch => {
        // TODO: using web invoke the takeOffMarket function of your smart contract
        console.log('takeOffMarket not yet implemented');
    }
}
