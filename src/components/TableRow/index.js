import React, {Component} from 'react';

class TableRow extends Component {
    render() {
        const recordInfo = this.props.data;
        const isViewable = recordInfo.viewable === 'true';
        const link = `/record/${recordInfo.id}`;

        return (
            <tr>
                <td>{recordInfo.resource_type}</td>
                <td>{recordInfo.display_title}</td>
                <td>{recordInfo.media_type}</td>
                <td>{recordInfo.language}</td>
                <td>{ isViewable ?
                    <a href={ link } className="glyphicon glyphicon-eye-open"></a> :
                    null }
                </td>
            </tr>
        );
    }
}

export default TableRow;
