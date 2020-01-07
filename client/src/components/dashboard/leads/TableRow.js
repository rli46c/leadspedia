import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ keyArray, rowData }) => {
    return (
        <tr>{keyArray.map(key => <td key={key}>{rowData[`${key}`]}</td>)}</tr>
    )
}

TableRow.propTypes = {
    keyArray: PropTypes.array.isRequired,
    rowData: PropTypes.object.isRequired,
}

export default TableRow
