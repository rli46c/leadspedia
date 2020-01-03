import {
    LOGIN,
    LOGIN_ERRORS,
    REG_USER,
    REG_ERRORS
} from '../types';
import axios from 'axios';

export const loginUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/auth/login');
        dispatch({
            type: LOGIN,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_ERRORS,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

export const registerUser = (userData) => async (dispatch) => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
    };
    try {
        // userData = JSON.stringify(userData);
        const res = await axios.post('/api/auth/register', userData, config);

        dispatch({
            type: REG_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: REG_ERRORS,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }   
};