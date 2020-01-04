import { SEND_MAIL, MAIL_ERRORS, RESET_MAIL_STATUS } from '../../actions/types';

const initialState = {
    mailSent: false,
    mailResponse: {},
    mailErrors: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEND_MAIL:
            return {
                ...state,
                mailResponse: action.payload,
                mailSent: true
            };
    
        case MAIL_ERRORS:
            return {
                ...state,
                mailErrors: [...state.mailErrors, action.payload]
            };

        case RESET_MAIL_STATUS:
            return {
                ...state,
                mailSent: false,
                mailResponse: {},
                mailErrors: []
            };

        default:
            return state;
    }
}