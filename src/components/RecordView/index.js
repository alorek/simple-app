import React, { Component } from 'react';
import { connect } from 'react-redux'
import './record.css';

class RecordView extends Component {
    render() {
    	const recordId = this.props.recordId;

    	const currentRecord = this.props.tableData.find(function(record) {
    		return record.id === recordId;
    	});

    	if (currentRecord) {
    		let standard = (currentRecord.standards || {}).standard;
            let mediaIcon = `../../assets/${currentRecord.media_type}.png`;
            let langIcon = `../../assets/${currentRecord.language}.png`;

	        return (

                <div className="card">
                    <div className="pull-left top">
                        <h4 className="pull-left">
                            { currentRecord.categorization } | { currentRecord.resource_type }
                        </h4>
                        <div className="pull-right">
                            <img
                                height="24px"
                                width="24px"
                                src={mediaIcon}
                                alt="Media Type: {currentRecord.media_type}" />
                            <img
                                height="34px"
                                src={langIcon}
                                alt="Language: {currentRecord.language}"/>
                        </div>
                    </div>
                    <h3>{ currentRecord.display_title }</h3>
			        <p>{ currentRecord.meaningful_description }</p>
			        <p className="additional-text">{ currentRecord.additional_text }</p>
			        { standard && standard.description ? <p>{ standard.description } ( { standard.id } )</p> : null	}
			        <p></p>
                </div>
	        );
    	}

    	return (
	        	<div><p>Not Found</p></div>
	    );
    }
}

function mapStateToProps(state) {
    return {
        tableData: state.table.tableData
    };
}

export default connect(mapStateToProps)(RecordView)
