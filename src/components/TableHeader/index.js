import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sortTable } from '../../actions';

class TableHeader extends Component {

    getSortIcon() {

        const sortOrder = this.props.sortOrder;
        const triangleDirection = sortOrder === 'asc' ? 'top' : 'bottom';
        return `pull-right glyphicon glyphicon-triangle-${triangleDirection}`;
    }

    getNewSortOrder(columnId) {

        if (columnId === this.props.sortKey) {
            return this.props.sortOrder === 'asc' ? 'desc' : 'asc';
        }
        return 'asc';
    }

    render() {
        const column = this.props.column;

        const showSorting = column.id === this.props.sortKey;

        return (
            <th
                className="sorting-header"
                onClick={ () => { this.props.sortTable(column.id, this.getNewSortOrder(column.id)) } }>

                <span className="pull-left">{ column.label }</span>

                { showSorting ?
                    <span className={ this.getSortIcon() }></span> :
                    null
                }
            </th>

        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ sortTable: sortTable }, dispatch);
}
function mapStateToProps(state) {
    return {
        sortKey: state.table.sortKey,
        sortOrder: state.table.sortOrder
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
