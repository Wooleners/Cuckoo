import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';
import SortBannerNodes from './SortBannerNodes';
import SortCommWrapNodes from './SortCommWrapNodes';

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

  onVoteClick(item) {
    // var sortId = item.sortId;
    // HomeActions.vote(sortId);

  }

  onViewClick(item){

  }

  onActinsClick(item){
    console.log("actins");
  }

  render() {
    var sortList = this.state.sortList,
        sortListShift = sortList.shift();
    return (
        <div className='pas-sortlist'>
          <SortBannerNodes onVoteClick={this.onVoteClick.bind(this, sortListShift)} onViewClick={this.onViewClick.bind(this)} result={sortListShift} />
          <SortCommWrapNodes data={sortList} />
        </div>
    );
  }
}

export default Home;
