import React from 'react';
import {Link} from 'react-router';
import JoyStore from '../stores/JoyStore';
import JoyActions from '../actions/JoyActions';
import HomeActions from '../actions/HomeActions';

class Joy extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = JoyStore.getState();
    this.state.paramsId = context.router.getCurrentParams().id;
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    JoyStore.listen(this.onChange);
    JoyActions.getJoyInfo(this.state.paramsId);
  }

  componentWillUnmount() {
    JoyStore.unlisten(this.onChange);
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
            <img className="logo" src="http://img2.pingan.com/app_images/kfj/assets/showLogo.png" alt="" />
        </div>
        <div className="content">
            <div className="show">
              <video src={this.state.profileInfo.joyUrl} controls poster={this.state.profileInfo.joyPoster}></video>
            </div>
            <div className="title">{this.state.profileInfo.name}</div>
            <div className="btn_box">
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

Joy.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Joy;
