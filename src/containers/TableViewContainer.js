import React, { Component } from 'react';
import Table from '../components/Table';
import TablePagination from '../components/TablePagination';
import './tableViewContainer.css';

class TableViewContainer extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="table-container">
                    <Table />
                    <TablePagination />
                </div>
            </div>
        );
    }
}

export default TableViewContainer;
