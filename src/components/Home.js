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
    console.dir(item)
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
          <SortCommWrapNodes onVoteClick={this.onVoteClick} data={sortList} />
          <section className="page-btm1">
            如果您投票的选手获得
            <span className="spec">总决赛冠军</span>
            ,<br/>
            <span className="spec">1亿万里通积分</span>等您分享！
          </section>
          <section className="page-button">
                <a className="icon page-button-next" href=""></a>
                <a className="icon page-button-return"></a>
                <div className="icon page-flag"></div>
          </section>
        </div>

    );
  }
}

export default Home;
