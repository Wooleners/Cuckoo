import React from 'react';
import {Link} from 'react-router';
import ProfileStore from '../stores/ProfileStore';
import ProfileActions from '../actions/ProfileActions';
import HomeActions from '../actions/HomeActions';

class Profile extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = ProfileStore.getState();
    this.state.paramsId = context.router.getCurrentParams().id;
    this.state.votes = context.router.getCurrentQuery().votes;
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProfileStore.listen(this.onChange);
    ProfileActions.getProfileInfo(this.state.paramsId);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this.onChange);
  }

  componentWillMount() {
    this.setState({
      a:1
    });
    return false;
  }

  onChange(state) {
    this.setState(state);
  }

  handleVote(item) {
    HomeActions.vote(this.state.paramsId);
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
    return (
      <div className="pas-profile">
        <div className="header">
            <a href="#" className="header-right f_right"><img className="btn_back" src="http://img2.pingan.com/app_images/kfj/assets/btn_back.png" alt="" /></a>
            <img className="logo" src="http://img2.pingan.com/app_images/kfj/assets/header_img.png" alt="" />
        </div>
        <div className="content">
            <div className="show"><img src={this.state.profileInfo.profileImgSrc} alt="" /></div>
            <div className="title">{this.state.profileInfo.name}</div>
            <div className="text">
                <ul>
                    <li><h2>选手组合简介</h2></li>
                    <li><span>成员信息：</span>{this.state.profileInfo.memberInfo}</li>
                    <li><span>参赛宣言：</span>{this.state.profileInfo.joinManifesto}</li>
                    <li><span>参赛地区：</span>{this.state.profileInfo.joinArea}</li>
                    <li><span>晋级赛区：</span>{this.state.profileInfo.promotionArea}</li>
                    <li><span>票数：</span>{this.state.votes}</li>
                </ul>
            </div>
            <div className="btn_box">
                <Link href="javascript:void(0)" to={"/Joy/" + this.state.profileInfo.id}><img src="http://img2.pingan.com/app_images/kfj/assets/btn_1.png" alt="" /></Link>
                <a href="javascript:void(0)"><img src="http://img2.pingan.com/app_images/kfj/assets/btn_2.png" onClick={this.handleVote.bind(this)} alt="" /></a>
            </div>
        </div>
        <div className="more">
            <img class="pleaseClick" src="http://img2.pingan.com/app_images/kfj/assets/hand.png" alt="" /><a href="#"><img className="getMore" onClick={this.goPADoctor} src="http://img2.pingan.com/app_images/kfj/assets/btn_3.png" alt="" /></a>
        </div>
	    </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Profile;
