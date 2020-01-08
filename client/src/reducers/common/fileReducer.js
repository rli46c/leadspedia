import {
    FILE_UPLOAD,
    FILE_ERRORS,
    XLSX_DB,
    DELETE_LEAD
} from '../../actions/types';

const initialState = {
    fileUploadStatus: false,
    uniqUpldedFileName: '',
    uploadedData: [],
    fileUploadErrors: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FILE_UPLOAD:
            return {
                ...state,
                fileUploadStatus: true,
                uniqUpldedFileName: action.payload.uniqUpldedFileName
            };

        case FILE_ERRORS:
            return {
                ...state,
                fileUploadStatus: false,
                fileUploadErrors: action.payload
            };

        case XLSX_DB:           
            return {
                ...state,
                uploadedData: state.uploadedData.concat(action.payload)
            };

        case DELETE_LEAD:
            return {
                ...state,
                uploadedData: state.uploadedData.filter(lead => lead._id !== action.payload.id)
            }
    
        default:
            return state;
    }
}