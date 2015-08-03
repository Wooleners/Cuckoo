var React = require('react');

var SortList = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data
    };
  },
  componentDidMount: function() {},
  handleOnClick: function(pep) {
    var sorts = this.state.data.map(function(item) {
      return item.name !== pep.name
        ? item
        : {
          name : item.name,
          votes : ++item.votes
        };
    });
    //动态修改动态生效 屌不屌
    console.log(6666);
    this.setState({
      'data': sorts
    });
  },
  render: function() {
    var sorts = this.state.data.map(function(item) {
      return (
        <li data-value={item.votes} onClick={this.handleOnClick.bind(this, item)}>{item.name}{item.votes}</li>
      );

    }, this);
    return (
      <div className='sorts'>
        <label>{this.props.label}</label>
        <ul>
          {sorts}
        </ul>
      </div>
    );
  }
});

module.exports = SortList;
