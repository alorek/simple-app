import React, { Component } from 'react';
import './App.css';
import Table from '../components/Table/Table';
import TablePagination from '../components/TablePagination/TablePagination';


class App extends Component {
    render() {
        return (
            <div>
                <div className="table-container">
                    <Table />
                    <TablePagination />
                </div>
            </div>
        );
    }
}

export default App;
