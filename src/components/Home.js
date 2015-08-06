import React from 'react';
import {Link, Navigation} from 'react-router';
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

  componentWillMount() {
    this.setState({
      sortList: [
        {
          id: '',
          name: '',
          votes: '',
          imgBannerSrc: "",
          imgSrc: ""
        }
      ]
    });
  }

  onChange(state) {
    this.setState(state);
  }

  onVoteClick(item) {

  }

  onViewClick(item){

  }

  onActinsClick(item){

  }

  render() {
    var sortList = this.state.sortList,
        sortListShift = sortList.shift();
    return (
        <div className='pas-sortlist'>
          <SortBannerNodes onActinsClick={this.onActinsClick} onVoteClick={this.onVoteClick.bind(this, sortListShift)} onViewClick={this.onViewClick.bind(this, sortListShift)} result={sortListShift} />
          <SortCommWrapNodes  onViewClick={this.onViewClick.bind(this)} data={sortList} />
        </div>
    );
  }
}

export default Home;
