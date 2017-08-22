import React, { Component } from 'react';
import { connect } from 'react-redux'

import TableHead from '../TableHead';
import TableRow from '../TableRow';

class Table extends Component {

    createRows () {
        return (this.props.tableData || []).map(row => {
            return <TableRow key={ row.id } data={ row } />
        });
    }

    render() {

        const columns = [
            'resource_type',
            'display_title',
            'media_type',
            'language',
            'viewable'
        ];

        return (
            <table className="table table-striped">
                <TableHead dataKeys = { columns } />
                <tbody>{ this.createRows() }</tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        tableData: state.table.tableData
    };
}

export default connect(mapStateToProps)(Table)
