import React, { Component } from 'react';
import { titleize } from '../../utilities/textUtils';
import TableHeader from '../TableHeader';

class TableHead extends Component {
    renderColumns() {
        return this.props.dataKeys.map(key => {
            const column = {
                label: key === 'viewable' ? '' : titleize(key.replace('_', ' ')),
                id: key
            };
            return <TableHeader key={key} column = { column } />
        });
    }

    render() {

        return (

            <thead>
                <tr>
                    { this.renderColumns() }
                </tr>
            </thead>
        );
    }
}

export default TableHead;
