import React from 'react';

class Dialog extends React.Component {

  render() {
    var props = this.props,
        visible = props.visible,
        context = props.context,
        classNames = ["pas-dialog"];

    !visible ? classNames.push('pas-dialog-hidden') : false;
    return (
      <div className={classNames.join(" ")}>
      	<div className="box">
      		<a className="close" onClick={props.onClose}></a>
          <span className="top-icon"><img src="/assets/animal2.png" /></span>
      		<div className="content">
      			<div className="inner"></div>
      			<div className="mv-word">
              {context}
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Dialog;
