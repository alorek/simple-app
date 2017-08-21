import React, { Component } from 'react';
import RecordView from '../components/RecordView';
import Button from '../components/Button';

class RecordViewContainer extends Component {
    render() {
        const recordId = this.props.match.params.id;
        const goBack = () => {
            this.props.history.goBack();
        };

        return (
            <div className="content-wrapper">
                <div className="record-wrapper">
                    <Button label="Go Back" actionFunc={ goBack } />
                    <RecordView recordId={ recordId } />
                </div>
            </div>
        );
    }
}

export default RecordViewContainer;
