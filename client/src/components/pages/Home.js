import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Home = ({}) => {

    return (
        <div className="mx-auto" style={{width: '750px'}}>
            <h1>Welcome to LeadsPedia in MERN</h1>
        </div>
    )
};

Home.propTypes = {
    // prop: PropTypes
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
