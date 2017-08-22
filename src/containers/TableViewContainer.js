import React, { Component } from 'react';

import Table from '../components/Table';
import TablePagination from '../components/TablePagination';
import SearchBox from '../components/SearchBox';

class TableViewContainer extends Component {

    render() {

        const tableContainerStyles = {
            maxWidth: '700px',
            margin: '0 auto',
            backgroundColor: '#ffffff'
        };

        return (
            <div className="content-wrapper">
                <div className="table-container card" style={ tableContainerStyles }>
                    <SearchBox />
                    <Table />
                    <TablePagination />
                </div>
            </div>
        );
    }
}

export default TableViewContainer;
