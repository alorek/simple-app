import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
// import { sortTable } from '../../actions';
import './record.css';

class RecordView extends Component {
    render() {
    	const recordId = this.props.match.params.id;

    	const currentRecord = this.props.tableData.find(function(record) {
    		return record.id === recordId;
    	});

    	if (currentRecord) {
    		let standard = (currentRecord.standards || {}).standard;
	        return (

	        	<div className="record-wrapper">
	        	<button>Go Back</button>
                <dl className="dl-horizontal">
                    <dt>resource_type</dt>
                    <dd>{ currentRecord.resource_type }</dd>
                    <dt>display_title</dt>
		            <dd>{ currentRecord.display_title }</dd>
                    <dt>media_type</dt>
		            <dd>{ currentRecord.media_type }</dd>
                    <dt>language</dt>
		            <dd>{ currentRecord.language }</dd>
                    <dt>meaningful_description</dt>
			        <dd>{ currentRecord.meaningful_description }</dd>
                    <dt>resource_type</dt>
			        <dd>{ currentRecord.additional_text }</dd>
                    <dt>standard</dt>
			        { standard ? <dd>{ standard.description } ( { standard.id } )</dd> : null	}
                    <dt>categorization</dt>
			        <dd>{ currentRecord.categorization }</dd>
                </dl>

		        </div>

	        );
    	}

    	return (
	        	<div><p>Not Found</p></div>
	    );
    }
}

const mapStateToProps = (state) => {
    return {
        tableData: state.table.tableData
    };
}

export default connect(mapStateToProps)(RecordView)
