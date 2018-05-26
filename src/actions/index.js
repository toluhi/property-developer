import {
    ADD_PROPERTY, ADD_PROPERTIES, LOGIN_SUCCESSFUL, LOGIN_FAILED, LOGOUT, SIGNUP_SUCCEEDED, SIGNUP_FAILED,
    CHANGE_CONTRACT_ADDRESS
} from "../constants/action-types";
import Web3 from 'web3';
import abi from '../contracts/landContract.json';

let contractAddress = '0xe516ed07eec4b93c58b64cb1fd7ccf1f365eb3d5';

let web3 = new Web3();
web3.setProvider(
    new Web3.providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);

let contractInstance = new web3.eth.Contract(abi, contractAddress);

contractInstance.methods.getPlots().call().then(response => console.log(response))
    .catch(error => console.error(error));

export const addProperty = property => {
    return dispatch => {
        web3.eth.personal.getAccounts().then(accounts => {
            console.log('accounts', accounts);

            web3.eth.getBalance(accounts[0]).then(balance => {
                console.log('balance[0]', balance);
                dispatch({
                    type: ADD_PROPERTY,
                    payload: property
                });
            });
        });

    }
}

export const addProperties = properties => {
    return dispatch => {
        return {
            type: ADD_PROPERTIES,
            payload: properties
        }
    }
}

export const login = (address, password) => {
    return dispatch => {
        web3.eth.personal.unlockAccount(address, password, 600)
            .then((response) => {
                console.info('Login successful:', response)
                dispatch({ type: LOGIN_SUCCESSFUL, payload: address });
            }).catch(error => {
                console.log('Login Error:', error)
                dispatch({ type: LOGIN_FAILED, payload: null });
            })

    }
}

export const logout = () => {
    return dispatch => dispatch({ type: LOGOUT, payload: null });
}

export const signup = (password) => {
    return dispatch => {
        web3.eth.personal.newAccount(password)
            .then(response => {
                console.info('new account ', response);
                dispatch({ type: SIGNUP_SUCCEEDED, payload: response })
            }).catch(error => {
                console.error('error creating account ', error);
                dispatch({ type: SIGNUP_FAILED })
            })
    }
}

export const changeContractAddress = (newAddress) => {
    return dispatch => {
        let contractInstance = new web3.eth.Contract(abi, contractAddress);

        dispatch({ type: CHANGE_CONTRACT_ADDRESS, payload: { contractAddress: newAddress, contractAddressValid: true, contractInstance: contractInstance } });
    }
}

export const clearContractAddress = _ => {
    return dispatch => {
        dispatch({ type: CHANGE_CONTRACT_ADDRESS, payload: { contractAddress: null, contractAddressValid: false, contractInstance: null } })
    }
}