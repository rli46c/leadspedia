import { GET_LEADS, LEAD_ERRORS, DELETE_LEAD} from '../types';
import axios from 'axios';

export const getAllLeads = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/dashboard/leads');
        
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LEAD_ERRORS,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
};

export const deleteLead = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/api/dashboard/leads/${id}`);
        dispatch({
            type: DELETE_LEAD,
            payload: res.data
        });
        
    } catch (err) {
        dispatch({
            type: LEAD_ERRORS,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}