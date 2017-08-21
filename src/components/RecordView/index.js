import React, { Component } from 'react';
import { connect } from 'react-redux'

class RecordView extends Component {

    renderStandard(standard) {

        return (
            <div className="alert alert-info">
                <p>Standard: { standard.id }</p>
                <p>{ standard.description }</p>
            </div>
        );
    }

    render() {
    	const recordId = this.props.recordId;

    	const currentRecord = this.props.tableData.find(function(record) {
    		return record.id === recordId;
    	});

    	if (currentRecord) {
    		const standard = (currentRecord.standards || {}).standard;
            const mediaIcon = `../../assets/${currentRecord.media_type}.png`;
            const langIcon = `../../assets/${currentRecord.language}.png`;
            const langAlt = `Language: ${currentRecord.language}`;
            const mediaAlt = `Media Type: ${currentRecord.media_type}`;
            const cardStyle = {
                maxWidth: '500px'
            };
            const h4Style = {
                color: '#666666'
            };
            const topStyle = {
                 width: '100%'
            };
            const additionalTextStyle = {
                color: '#666666',
                fontSize: '14px'
            };


	        return (

                <div className="card" style={ cardStyle }>
                    <div className="pull-left" style={ topStyle }>
                        <h4 className="pull-left" style={ h4Style }>
                            { currentRecord.categorization } | { currentRecord.resource_type }
                        </h4>
                        <div className="pull-right">
                            <img
                                height="24px"
                                width="24px"
                                src={ mediaIcon }
                                alt={ mediaAlt } />
                            <img
                                height="34px"
                                src={ langIcon }
                                alt={ langAlt }/>
                        </div>
                    </div>
                    <h3>{ currentRecord.display_title }</h3>
			        <p>{ currentRecord.meaningful_description }</p>
			        <p style={ additionalTextStyle }>{ currentRecord.additional_text }</p>
			        { standard && standard.description ? this.renderStandard(standard) : null }
                </div>
	        );
    	}

    	return (
	        <div><p>Record not found</p></div>
	    );
    }
}

function mapStateToProps(state) {
    return {
        tableData: state.table.tableData
    };
}

export default connect(mapStateToProps)(RecordView)
