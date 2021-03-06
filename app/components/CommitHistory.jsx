// 
//	CommitHistory.jsx
//
//	Entire commit history
//

var React = require('react');
var CommitEntry = require('./CommitEntry');

var CommitHistory = React.createClass({
  render: function() {
		
		// Build list of CommitEntry
    var history = this.props.history.map(function(entry, i){
      return (
        <CommitEntry key={i} entry={entry} />
      )
    });

    return (
			<section className='history'>
				<p className='title'> Recent Commit History </p>
				{history}
			</section>
    )

  }
});

module.exports = CommitHistory;