// 
//	CommitEntry.jsx
//
//	Single commit entry
//

var React = require('react');
var CommitDetail = require('./CommitDetail');
var CommitThread = require('./CommitThread');

var CommitEntry = React.createClass({
	
	getInitialState: function() {
    return {
      showDetail: false
    };
  },
	
	// Toggles show detail state
	toggleDetail: function(event) {
    this.setState({ 
			showDetail: !this.state.showDetail
    })
  },
	
  render: function() {
		var entry = this.props.entry;
		var detailArrow = this.state.showDetail ? '∧' : '∨';
		
		return (
			<article className='commit'>
				<div className='entry'>
					<p className='msg'>{entry.msg}</p>
					<p className='date'>{entry.date}</p>
					<button className='detail-button' onClick={this.toggleDetail}>{detailArrow}</button>
					<CommitDetail show={this.state.showDetail} entry={entry} /> 
      	</div>
				<CommitThread id={entry._id} comments={entry.comments} />
			</article>
		)
  }
});

module.exports = CommitEntry;
