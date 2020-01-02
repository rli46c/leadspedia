import {
    LOGIN,
    LOGIN_ERRORS,
    LOGIN_STATUS
} from '../../actions/types';

const initialState = {
    loginStatus : null,
    loginErrors : []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                
            };

        case LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.payload
            };
        default:
            return state;
    }
};