import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';

import { searchTable } from '../../actions';

class SearchBox extends Component {

    constructor(props) {
        super(props)
        this.handleSearch = debounce(this.handleSearch, 300).bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(e) {
        this.handleSearch(e.target.value);
    }

    handleSearch(searchTerm) {
        this.props.searchTable(searchTerm);
    }

    render() {

        const inputStyle = {
            background: 'transparent',
            borderRight: 'none',
            boxShadow: 'inset 0 1px 0px rgba(0, 0, 0, .075)'
        };
        const addOnStyle = {
            background: 'transparent',

        };

        return (
            <div className="input-group">
                <input
                   onKeyUp={  this.onKeyUp  }
                   style={ inputStyle }
                    className="form-control"
                    placeholder="Search"
                    type="text"/>
                <span
                    className="input-group-addon"
                    style={ addOnStyle }>
                    <i className="glyphicon glyphicon-search"></i>
                </span>
            </div>
        );
    }

}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({searchTable: searchTable}, dispatch);
}
function mapStateToProps(state) {
    return {
        searchTerm: state.table.searchTerm
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
