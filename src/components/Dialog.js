import React from 'react';

class Dialog extends React.Component {

  render() {
    var visible = this.props.visible,
        classNames = ["pas-dialog"];
    if(!visible){
      classNames.push('pas-dialog-hidden');
    }
    return (
      <div className={classNames.join(" ")}>
      	<div className="box">
      		<span className="close" onClick={this.props.onClose}></span>
          <span className="top-icon"><img src="/assets/animal2.png" /></span>
      		<div className="content">
      			<div className="inner"></div>
      			<div className="mv-word">

      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Dialog;
