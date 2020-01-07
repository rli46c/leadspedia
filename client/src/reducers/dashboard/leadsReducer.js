import { GET_LEADS, LEAD_ERRORS } from '../../actions/types';

const initialState = {
    leadsData: [],
    leadsError: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leadsData: action.payload
            };

        case LEAD_ERRORS:
            return {
                ...state,
                leadsError: action.payload
            };
    
        default:
            return state;
    }
};