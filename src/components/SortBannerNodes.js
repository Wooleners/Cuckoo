import React from 'react';
import {Link} from 'react-router';
import Dialog from './Dialog';

class SortBannerNodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showDialog() {
    this.setState({
      visible: true
    });
  }

  handleOk() {
    this.setState({
      visible: false
    });
  }

  handleClose() {
    this.setState({
      visible: false
    });
  }

  onActinsClick() {

  }

  render() {
    var result = this.props.result || {
      votes: ""
    };
    return (
      <section className="page-top clearfloat">
        <div className="page-top-left">
          <img src="/assets/no1.png" alt="" />
        </div>
        <div className="page-top-right">
          <div className="icon active-explain" onClick={this.showDialog.bind(this)}></div>
          <div className="active-no clearfloat">{result.votes}票</div>
          <div className="active-btn">
            <a className="icon active-btn-view" onClick={this.props.onViewClick} href="javascript:void(0)"></a>
            <a className="icon active-btn-vote" onClick={this.props.onVoteClick} href="javascript:void(0)"></a>
          </div>
        </div>
        <Dialog visible={this.state.visible} onClose={this.handleClose.bind(this)}/>
      </section>
    );
  }
}

export default SortBannerNodes;
