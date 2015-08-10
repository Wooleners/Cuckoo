import React from 'react';

class Dialog extends React.Component {
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
      content: <div className="dialogContent"><img src="http://img2.pingan.com/app_images/kfj/assets/voteSuccess.png" /><div className="share"></div></div>
    }, {
      type: 'yetSentScore',
      content: <div className="dialogContent">
        <img src="http://img2.pingan.com/app_images/kfj/assets/revote.png" />
        <div className="btnContent">
          <div className="expHealthManager"></div>
          <div className="yetShare"></div>
        </div>
      </div>
    }, {
      type: 'yetOverdue',
      content: <div className="dialogContent">
        <img src="http://img2.pingan.com/app_images/kfj/assets/actOver.png" />
        <div class="btnContent">
          <div className="overExpHealthManager"></div>
          <div className="backGamesZone"></div>
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
          <div className="loginTOA"></div>
          <div className="loginShare"></div>
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
