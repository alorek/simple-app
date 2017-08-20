import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { sortTable } from '../../actions';

class TableHeader extends Component {

    render() {
        const column = this.props.column;
        const showSorting = column.id === this.props.sortKey;
        const triangleDirection = this.props.sortOrder === 'asc' ? 'top' : 'bottom';
        const iconClass = `glyphicon glyphicon-triangle-${triangleDirection}`;
        console.log(this.props.sortKey);
        return (
            <th onClick={ () => { this.props.sortTable(column.id, 'asc'); } }>
                { column.label }
                { showSorting ?
                    <span className={ iconClass }></span> :
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
