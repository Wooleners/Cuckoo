import React from 'react';
import {Link} from 'react-router';

class SortBannerNodes extends React.Component {
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
          <div className="icon active-explain"></div>
          <div className="active-no clearfloat">{result.votes}票</div>
          <div className="active-btn">
            <a className="icon active-btn-view" onClick={this.props.onViewClick} href="javascript:void(0)"></a>
            <a className="icon active-btn-vote" onClick={this.props.onVoteClick} href="javascript:void(0)"></a>
          </div>
        </div>
      </section>
    );
  }
}

export default SortBannerNodes;
