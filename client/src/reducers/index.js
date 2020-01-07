import {combineReducers} from 'redux';
import auth from './auth/authReducer';
import mail from './common/mailReducer';
import file from './common/fileReducer';
import leads from './dashboard/leadsReducer'

export default combineReducers ({
    auth, mail, file, leads
});