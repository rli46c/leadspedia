import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Login = ({auth: {}}) => {

    return (
        <div>
            
        </div>
    )
};

Login.propTypes = {
    // prop: PropTypes
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);