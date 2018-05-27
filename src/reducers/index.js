import { LOGIN_FAILED, LOGIN_SUCCESSFUL, LOGOUT, SIGNUP_FAILED, SIGNUP_SUCCEEDED, CHANGE_CONTRACT_ADDRESS,
PLOTS_LOADED } from "../constants/action-types";

const initialState = {
    properties : []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case PLOTS_LOADED:
            return {...state, properties: action.payload};
        case LOGIN_SUCCESSFUL:
        case SIGNUP_SUCCEEDED:
            return {...state, userId: action.payload};
        case LOGIN_FAILED:
        case LOGOUT:
        case SIGNUP_FAILED:
            return {...state, userId: null};
        case CHANGE_CONTRACT_ADDRESS:
            return {...state, contract: action.payload}
        default:
            return state;
    }
};

export default rootReducer;