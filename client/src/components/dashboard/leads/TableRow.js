import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLead, updateLead } from '../../../actions/dashboard/leadsAction'

export const TableRow = ({ keyArray, rowData, deleteLead }) => {

    return (
        <tr>{keyArray.map(key => 
            !(['_id', '__v', 'fileId'].includes(key)) ?
                <td key={rowData[`${key}`]}>{rowData[`${key}`]}</td> :
                null
            )}
            <td><input type="button" value="Edit" className="btn btn-primary" /></td>
            <td><input type="button" value="Delete" className="btn btn-danger" onClick={() => deleteLead(rowData._id)} /></td>
        </tr>
    );
};

TableRow.propTypes = {
    keyArray: PropTypes.array.isRequired,
    rowData: PropTypes.object.isRequired,
    deleteLead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    deleteLead
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
