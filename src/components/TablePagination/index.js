import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import times from 'lodash/times';
import { selectPage, nextPage, previousPage } from '../../actions';

class TablePagination extends Component {
    render() {
        const currentPage = this.props.currentPage;
        const self = this;
        const pages = times((this.props.data.length / 5), function(i) {
            const page = i + 1;
            const isActive = page === currentPage;

            return (
                <li
                key={i}
                onClick={ () => { self.props.selectPage(page); } }
                className= { isActive ? 'active' : ''} ><a>
                    { page }
                </a></li>
            );
        });

        return (
            <ul className="pagination pull-right">
                <li
                    onClick={ () => { this.props.previousPage(); } }>
                    <a>&laquo;</a>
                </li>
                { pages }
                <li
                    onClick={ () => { this.props.nextPage(); } }>
                    <a>&raquo;</a>
                </li>
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPage: selectPage,
        nextPage: nextPage,
        previousPage: previousPage
    }, dispatch);
}

function mapStateToProps(state){
    return {
        currentPage: state.table.currentPage,
        data: state.table.data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
