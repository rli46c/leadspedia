import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllLeads } from '../../../actions/dashboard/leadsAction';
import TableRow from './TableRow';

export const DataTable = ({ leads: { leadsData, leadsError }, file: {uploadedData}, getAllLeads }) => {

    useEffect(() => {
        getAllLeads();
    }, [getAllLeads]);      

    let keyArray = [];

    if (leadsData.length > 0) {
        keyArray = Object.keys(leadsData[0]);
    } else if (uploadedData.length > 0) {
        keyArray = Object.keys(uploadedData[0]);
    } else {
        keyArray = ['VERTICAL', 'AFFILIATE', 'ADVERTISER', 'PROPOSAL'];
    }  
    
    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    { keyArray.map(key => !(key in { _id: '_id', __v: '__v', fileId: 'fileId' }) ? <th key={key}>{key.toUpperCase()}</th> : null) }
                    <th colSpan='2'>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {leadsData.length > 0 && leadsData.map(rowData => <TableRow keyArray={keyArray} rowData={rowData} key={rowData._id} />)}
                {uploadedData.length > 0 && uploadedData.map(rowData => <TableRow keyArray={keyArray} rowData={rowData} key={rowData._id} />)}
            </tbody>
        </table>
    );
};

DataTable.propTypes = {
    leads: PropTypes.object.isRequired,
    file: PropTypes.object.isRequired,
    getAllLeads: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    leads: state.leads,
    file: state.file
});

const mapDispatchToProps = {
    getAllLeads
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);