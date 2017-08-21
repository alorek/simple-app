import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class TableRow extends Component {
    render() {
        const recordInfo = this.props.data || {};
        const isViewable = (recordInfo).viewable === 'true';
        const link = `/record/${recordInfo.id}`;

        return (
            <tr key={recordInfo.id}>
                <td>{recordInfo.resource_type}</td>
                <td>{recordInfo.display_title}</td>
                <td>{recordInfo.media_type}</td>
                <td>{recordInfo.language}</td>

                <td>{isViewable ? <Link to={link} ><span className="glyphicon glyphicon-eye-open"></span></Link> : null}
                </td>
            </tr>
        );
    }
}

export default TableRow;
