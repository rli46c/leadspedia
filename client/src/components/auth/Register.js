import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth/authAction';

export const Register = ({ registerUser }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userType, setUserType] = useState('');
    const [userPass, setUserPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (userPass === confirmPass) {
            const userData = {
                firstName,
                lastName,
                userEmail,
                userType,
                userPass
            };
    
            registerUser(userData);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row py-3">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" onChange={(e)=>setFirstName(e.target.value)} tabIndex="1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userEmail">Email address</label>
                        <input type="email" className="form-control" id="userEmail" name="userEmail" aria-describedby="emailHelp" onChange={(e)=>setUserEmail(e.target.value)} tabIndex="3" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="userPass">Password</label>
                        <input type="password" className="form-control" id="userPass" name="userPass" onChange={(e)=>setUserPass(e.target.value)} tabIndex="5" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" onChange={(e)=>setLastName(e.target.value)} tabIndex="2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userType">User Type</label>
                        <select className="custom-select" name="userType" id="userType" aria-describedby="utHelp" onChange={(e)=>setUserType(e.target.value)} tabIndex="4">
                            <optgroup label="Select User Type:">
                                <option value="utAffiliate">Affiliate</option>
                                <option value="utAdvertiser">Advertiser</option>
                            </optgroup>
                        </select>
                        <small id="utHelp" className="form-text text-muted">Sellect the type of account you want.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPass" onChange={(e)=>setConfirmPass(e.target.value)} tabIndex="6" />
                    </div>
                </div>
            </div>
            
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" tabIndex="7" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-block btn-primary" tabIndex="0">Submit</button>
        </form>
    );
};

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    // auth: state.auth
});

const mapDispatchToProps = {
    registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);