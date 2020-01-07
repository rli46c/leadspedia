import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllLeads } from '../../../actions/dashboard/leadsAction';
import TableRow from './TableRow';

export const DataTable = ({ leads: { leadsData, leadsError }, getAllLeads }) => {

    useEffect(() => {
        getAllLeads();
    }, [getAllLeads]);      

    let keyArray = [];

    if (leadsData.length > 0) {
        keyArray = Object.keys(leadsData[0]);
    }

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    {keyArray.map(key => <th key={key}>{key}</th>)}
                </tr>
            </thead>
            <tbody>
                {leadsData && leadsData.map(rowData => <TableRow keyArray={keyArray} rowData={rowData} key={rowData._id} />)}
            </tbody>
        </table>
    );
};

DataTable.propTypes = {
    leads: PropTypes.object.isRequired,
    getAllLeads: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    leads: state.leads
});

const mapDispatchToProps = {
    getAllLeads
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);