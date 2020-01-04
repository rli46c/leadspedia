import {SEND_MAIL, MAIL_ERRORS, RESET_MAIL_STATUS} from '../types';
import axios from 'axios';

export const sendMail = (mailData) => {
    return async (dispatch) => {
        const config = { headers: { 'Content-Type': 'application/json' } };
        try {
            const res = await axios.post('/api/common/sendmail', mailData, config);
            
            dispatch ({
                type: SEND_MAIL,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: MAIL_ERRORS,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
        }
    }
};

export const resetMailStatus = () => (dispatch) => {
    dispatch({ type: RESET_MAIL_STATUS });
}