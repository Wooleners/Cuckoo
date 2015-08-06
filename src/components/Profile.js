import React from 'react';
import {Link} from 'react-router';
import ProfileStore from '../stores/ProfileStore';
import ProfileActions from '../actions/ProfileActions';

class Profile extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = ProfileStore.getState();
    this.state.paramsId = context.router.getCurrentParams().id;
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

  handleClick(item) {

  }

  render() {
    return (
      <div className="pas-profile">
        <div className="header">
            <a href="#" className="f_right"><img src="/assets/btn_back.png" alt="" /></a>
            <img src="/assets/header_img.png" alt="" />
        </div>
        <div className="content">
            <div className="show"><img src="/assets/show_img1.png" alt="" /></div>
            <div className="title"><img src="/assets/title_1.png" alt="" /></div>
            <div className="text">
                <ul>
                    <li><h2>选手组合简介</h2></li>
                    <li><span>成员信息：</span>小虎、小龙、小虎妈妈</li>
                    <li><span>参赛宣言：</span>我们是相亲相爱一家人！</li>
                    <li><span>参赛地区：</span>参赛地区：</li>
                    <li><span>晋级赛区：</span>哈尔滨</li>
                    <li><span>票数：</span>12345</li>
                </ul>
            </div>
            <div className="btn_box">
                <a href="#"><img src="/assets/btn_1.png" alt="" /></a>
                <a href="#"><img src="/assets/btn_2.png" alt="" /></a>
            </div>
        </div>
        <div className="more">
            <img src="/assets/hand.png" alt="" /><a href="#"><img src="/assets/btn_3.png" alt="" /></a>
        </div>
	    </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Profile;
