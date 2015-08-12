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
    HomeActions.vote(item.id);
  }

  onViewClick(item){

  }

  onActinsClick(item){

  }

  goHome(){
    window.location.href='/c3/huodong/2015kfj/index.shtml';
  }

  goPADoctor(){
    !(typeof Native == "undefined") ? Native.toPADoctor() : false;
  }

  backGamesZone(){
    window.location.href='/c3/huodong/2015kfj/gamesZone.html';
  }

  shareFunc(){
    !(typeof Native == "undefined") ? Native.share("2015平安人寿第20届客服节", "与平安相伴,与健康同行--平安人寿第20届客服节欢迎您的参与!", "http://m.pingan.com/c3/huodong/2015kfj/h5/index.shtml", "http://m.pingan.com/c3/huodong/2015kfj/h5/index.shtml") : false;
  }

  render() {
    var sortList = this.state.sortList.filter((item, index) => {
      return index !== 0 ? item : false;
    });
    return (
        <div className='pas-sortlist'>
          <SortBannerNodes onActinsClick={this.onActinsClick} onVoteClick={this.onVoteClick.bind(this, this.state.sortList[0])} onViewClick={this.onViewClick.bind(this, this.state.sortList[0])} result={this.state.sortList[0]} />
          <SortCommWrapNodes onVoteClick={this.onVoteClick} data={sortList} />
          <section className="page-btm1">
            如果您投票的选手获得
            <span className="spec">总决赛冠军</span>
            ,<br/>
            <span className="spec">1亿万里通积分</span>等您分享！
          </section>
          <section className="page-button">
                <a className="icon page-button-next" href="javascript:void(0)" onClick={this.goPADoctor}></a>
                <a className="icon page-button-return" href="javascript:void(0)" onClick={this.backGamesZone}></a>
                <div className="icon page-flag"></div>
          </section>
        </div>

    );
  }
}

export default Home;
