import React, { Component } from 'react';
import RecordView from '../components/RecordView';
import Button from '../components/Button';

class RecordViewContainer extends Component {
    render() {
        const recordId = this.props.match.params.id;
        const goBack = () => {
            this.props.history.goBack();
        };
        const style = {
            margin: '0 auto',
            maxWidth: '800px'
        };

        return (
            <div className="content-wrapper">
                <div className="record-wrapper" style={ style }>
                    <Button
                        label="Back to records"
                        actionFunc={ goBack }
                        className="btn btn-primary"
                        iconClass="glyphicon glyphicon-arrow-left" />
                    <RecordView recordId={ recordId } />
                </div>
            </div>
        );
    }
}

export default RecordViewContainer;
