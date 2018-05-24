import { ADD_PROPERTY, LOGIN_FAILED, LOGIN_SUCCESSFUL, LOGOUT, SIGNUP_FAILED, SIGNUP_SUCCEEDED } from "../constants/action-types";

const initialState = {
    properties : []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PROPERTY:
            return {...state, properties: [...state.properties, action.payload]};
        case LOGIN_SUCCESSFUL:
        case SIGNUP_SUCCEEDED:
            return {...state, userId: action.payload};
        case LOGIN_FAILED:
        case LOGOUT:
        case SIGNUP_FAILED:
            return {...state, userId: null};
        default:
            return state;
    }
};

export default rootReducer;