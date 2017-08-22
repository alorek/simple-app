import React, { Component } from 'react';

class SearchBox extends Component {

    render() {
        return (
            <div className="input-group add-on">
                <input
                    className="form-control"
                    placeholder="Search"
                    type="text"/>
                <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search"></i>
                    </button>
                </div>
            </div>
        );
    }

}

export default SearchBox;
