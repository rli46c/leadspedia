import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FileUpload from '../common/FileUpload';
import SendMail from '../common/SendMail';
import DataTable from '../dashboard/leads/DataTable';

export const Dash = ({}) => {

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <div className="container mt-4">
                        <h4 className="display-4, mb-r text-center">
                            <i className="fas fa-file-excel"></i>
                            <span className="ml-2 mr-2">Excel to MongoDB</span>
                            <i className="fas fa-database"></i>
                        </h4>
                        <FileUpload />
                    </div>
                </div>
                <div className="col-md-6">
                <div className="container mt-4">
                        <h4 className="display-4, mb-r text-center">
                            <i className="fas fa-envelope-square"></i>
                            <span className="ml-2 mr-2">Send Mail</span>
                            <i className="fas fa-envelope-open-text"></i>
                        </h4>
                        <SendMail />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <DataTable />
                </div>
            </div>
        </Fragment>
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