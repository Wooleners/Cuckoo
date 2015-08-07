import React from 'react';
import {Link} from 'react-router';

class SortCommNodes extends React.Component {
  render() {
    return (
      <li>
        <div className="list-ul-div">
          <img src={this.props.data.imgSrc} alt="placeholder+image" />
          <div className="imgbg"></div>
          <div className="subimgno">{this.props.index}</div>
          <div className="note">{this.props.data.votes}票</div>
          <div className="li-btn">
            <Link className="icon active-btn-view" to={"/profile/" + this.props.data.id + "?votes=" + this.props.data.votes}></Link>
            <a className="icon active-btn-vote" onClick={this.props.onVoteClick.bind(this, this.props.data)}></a>
          </div>
        </div>
      </li>
    );
  }
}

export default SortCommNodes;
