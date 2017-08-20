import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import times from 'lodash/times';
import { selectPage } from '../../actions';
import './pagination.css'


class TablePagination extends Component {
    render() {
        const currentPage = this.props.currentPage;
        const self = this;
        const pages = times((this.props.data.length / 5), function(i) {
            const page = i + 1;
            const isActive = page === currentPage;

            return (
                <span
                onClick={ () => { self.props.selectPage(page); } }
                className= { isActive ? 'active' : ''} >
                    { page }
                </span>
            );
        });

        return (
            <div className='table-pagination'>
                { pages }
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPage: selectPage
    }, dispatch);
}

function mapStateToProps(state){
    return {
        currentPage: state.table.currentPage,
        data: state.table.data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
