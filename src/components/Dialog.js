import React from 'react';

class Dialog extends React.Component {

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
    var props = this.props,
        visible = props.visible,
        type = props.type,
        classNames = ["pas-dialog"];

    !visible ? classNames.push('pas-dialog-hidden') : false;
    var temps = [{
      type: 'actIns',
      content: <img src="http://img2.pingan.com/app_images/kfj/assets/actins.png" />
    }, {
      type: 'sendScoreSuccess',
      content: <div className="dialogContent">
        <img src="http://img2.pingan.com/app_images/kfj/assets/voteSuccess.png" />
        <a className="share" onClick={this.shareFunc}></a>
      </div>
    }, {
      type: 'yetSentScore',
      content: <div className="dialogContent">
        <img src="http://img2.pingan.com/app_images/kfj/assets/revote.png" />
        <div className="btnContent">
          <a className="expHealthManager" onClick={this.goPADoctor}></a>
          <a className="yetShare" onClick={this.shareFunc}></a>
        </div>
      </div>
    }, {
      type: 'yetOverdue',
      content: <div className="dialogContent">
        <img src="http://img2.pingan.com/app_images/kfj/assets/actOver.png" />
        <div class="btnContent">
          <a className="overExpHealthManager" onClick={this.goPADoctor}></a>
          <a className="backGamesZone" onClick={this.backGamesZone}></a>
        </div>
      </div>
    }, {
      type: 'sysException',
      content: '系统异常'
    }, {
      type: 'argsVerifyFail',
      content: '参数错误'
    }, {
      type: 'unLogin',
      content: <div className="dialogContent">
        <img src="http://img2.pingan.com/app_images/kfj/assets/voteSuccess.png" />
        <div className="btnContent">
          <a className="loginTOA" onClick={this.goHome}></a>
          <a className="loginShare" onClick={this.shareFunc}></a>
        </div>
      </div>
    }];
    var content = temps.filter((item, index) => {
      return type == item.type;
    })[0].content;
    return (
      <div className={classNames.join(" ")}>
      	<div className="box">
      		<a className="close" onClick={props.onClose}></a>
          <span className="top-icon"><img src="http://img2.pingan.com/app_images/kfj/assets/animal2.png" /></span>
      		<div className="content">
      			<div className="inner"></div>
      			<div className="mv-word">
              {content}
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Dialog;
