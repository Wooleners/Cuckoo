import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    HomeActions.getSortList();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(item) {
    var sortId = item.sortId;
    HomeActions.vote(sortId);
  }

  render() {
    var sortNodes = this.state.sortList.map((item, index) => {
      return (
        <div onClick={this.handleClick.bind(this, item)}>{item.name}{item.votes}</div>
      );
    });

    return (
      <div className='container'>
        <h3 className='text-center'>Click on the portrait. Select your favorite.</h3>
        <div className='row'>
          {sortNodes}
        </div>
      </div>
    );
  }
}

export default Home;
