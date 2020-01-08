import {
    FILE_UPLOAD,
    FILE_ERRORS,
    XLSX_DB
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
                uploadedData: [...state.uploadedData, action.payload]
            };
    
        default:
            return state;
    }
}