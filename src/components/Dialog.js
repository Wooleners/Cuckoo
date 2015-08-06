import React from 'react';

class Dialog extends React.Component {

  render() {
    var props = this.props,
        visible = props.visible,
        classNames = ["pas-dialog"];
    if(!visible){
      classNames.push('pas-dialog-hidden');
    }
    var templets = [{
      type: 'voteFinish',
      content: '投票完成'
    }, {
      type: 'voteSuccess',
      content: '投票成功'
    }, {
      type: 'actOver',
      content: '活动结束'
    }, {
      type: 'actIns',
      content: '活动介绍'
    }];
    var content = templets.filter(item => {
      return item.type == props.type;
    })[0].content;
    return (
      <div className={classNames.join(" ")}>
      	<div className="box">
      		<a className="close" onClick={props.onClose}></a>
          <span className="top-icon"><img src="/assets/animal2.png" /></span>
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
