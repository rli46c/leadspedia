import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const SendMail = ({}) => {

    return (
        <div>
            Send Mail from here
        </div>
    );
};

SendMail.propTypes = {
    // prop: PropTypes
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMail);