import {
    LOGIN,
    LOGIN_ERRORS,
    LOGIN_STATUS
} from '../types';
import axios from 'axios';

export const loginUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/auth/login');
        dispatch({
            type: LOGIN_STATUS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_ERRORS,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};