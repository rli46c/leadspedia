import { GET_LEADS, LEAD_ERRORS, DELETE_LEAD } from '../../actions/types';

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
        
        case DELETE_LEAD:
            return {
                ...state,
                leadsData: state.leadsData.filter(lead => lead._id !== action.payload.id)
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