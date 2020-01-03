import {
    LOGIN,
    LOGIN_ERRORS,
    REG_USER,
    REG_ERRORS
} from '../../actions/types';

const initialState = {
    loginStatus: {},
    loginErrors: [],
    regStatus: {},
    regErrors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loginStatus: action.payload
            };
        case LOGIN_ERRORS:
            return {
                ...state,
                loginErrors: action.payload
            };
        case REG_USER:
            return {
                ...state,
                regStatus: action.payload
            };
        case REG_ERRORS:
            return {
                ...state,
                regErrors: action.payload
            };
        default:
            return state;
    }
};