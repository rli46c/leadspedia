import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth/authAction';

export const Login = ({auth: {loginStatus, loginErrors}, loginUser}) => {

    useEffect(()=>{
        loginUser();
    }, [loginUser]);

    console.log(loginStatus);
    

    return (
        <div>
            <h3>Login From Here</h3>
            <Link to="/register">Register here</Link>
        </div>  
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