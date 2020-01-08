import {
    FILE_UPLOAD,
    FILE_ERRORS,
    XLSX_DB
} from '../types';

import axios from 'axios';

export const fileUpload = (formData) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            const res = await axios.post('/api/common/fileupload', formData, config);
            dispatch({
                type: FILE_UPLOAD,
                payload: res.data
            });
            
        } catch (err) {
            dispatch({
                type: FILE_ERRORS,
                payload: {msg: err.response.statusText, status: err.response.status}
            });
        }
    }
};

export const xlsxToDB = (fileAttribs) => {
    return async (dispatch) => {
        try {
            const config = { headers: { 'Content-Type': 'application/json' } }
            const res = await axios.post('/api/common/csvxlsxtodb', fileAttribs, config);
            dispatch({
                type: XLSX_DB,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: FILE_ERRORS,
                payload: {msg: err.response.statusText, status: err.response.status}
            });
        }
    }
};