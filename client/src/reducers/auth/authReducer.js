import {
    LOGIN,
    LOGIN_ERRORS,
    REG_USER,
    REG_ERRORS,
    SET_REGISTERED
} from '../../actions/types';

const initialState = {
    isAuthenticated: false,
    loginErrors: [],
    regStatus: {},
    regSuccess: false,
    regErrors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
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
        case SET_REGISTERED:
            return {
                ...state,
                regSuccess: true
            }
        case REG_ERRORS:
            return {
                ...state,
                regErrors: action.payload
            };
        default:
            return state;
    }
};