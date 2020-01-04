import {combineReducers} from 'redux';
import auth from './auth/authReducer';
import mail from './common/mailReducer';

export default combineReducers ({
    auth, mail
});