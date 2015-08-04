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
        return index == 0 ?
          <div className = 'sortBanner'>
            <div className = "sortShow">
              <img src={item.imgBannerSrc} />
            </div>
            <div className = "sortToolBtn">
              <div className = "sortActIns"></div>
              <div className = "sortVotesCount">{item.votes}</div>
              <div className = "sortBtn">
                <div className = "sortView"></div>
                <div className = "sortVote"></div>
              </div>
            </div>
          </div>
          :
          <div className = "sortComm">
            <div className = "sortShow">
              <div className = "sortVotesCount">{item.votes}</div>
              <img src={item.imgSrc} />
            </div>
            <div className = "sortToolBtn">
              <div className = "sortView"></div>
              <div className = "sortVote"></div>
            </div>
          </div>;
    });

    return (
      <div className='container'>
        <div className='pas-sortlist'>
          {sortNodes}
        </div>
      </div>
    );
  }
}

export default Home;
