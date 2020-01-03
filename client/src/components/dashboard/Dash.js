import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Dash = ({}) => {

    return (
        <div>
            This is the DashBoard
        </div>
    );
};

Dash.propTypes = {
    // prop: PropTypes
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Dash);