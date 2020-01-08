import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth/authAction';

export const Login = ({auth: {isAuthenticated, loginErrors}, loginUser}) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [remMe, setRemMe] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            userEmail,
            userPass,
            remMe
        };
                
        loginUser(loginData);
    }

    if (isAuthenticated) {
        return <Redirect to='/dash' />;
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="userEmail">Email address</label>
                <input type="email" className="form-control" id="userEmail" name="userEmail" aria-describedby="emailHelp" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} tabIndex="1" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="userPass">Password</label>
                <input type="password" className="form-control" id="userPass" name="userPass" value={userPass} onChange={(e)=>setUserPass(e.target.value)} tabIndex="2" />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" name="rememberMe" value={remMe} onChange={(e)=>setRemMe(!remMe)} tabIndex="3" />
                <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary" tabIndex="0">Login</button>
            <span> | If not registered: </span>
            <Link to="/register">Register here</Link>
        </form> 
    );
};

Login.propTypes = {
    auth: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = {
    loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);