import React from 'react';
import {Link} from 'react-router';

class SortCommNodes extends React.Component {
  render() {
    var commStyle = {
      backgroundImage: 'url(' + this.props.imgSrc + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%'
    }
    var imgStyle = {
      visibility : 'hidden'
    }
    return (
      <li>
        <div className="list-ul-div">
          <img src={this.props.imgSrc} style={imgStyle} alt="placeholder+image" />
          <div className="imgbg" style={commStyle}></div>
          <div className="subimgno">{this.props.index + 2}</div>
          <div className="note">{this.props.votes}票</div>
          <div className="li-btn">
            <Link className="icon active-btn-view" to={"/profile/" + this.props.id + "?votes=" + this.props.votes}></Link>
            <a className="icon active-btn-vote" onClick={this.props.onVoteClick}></a>
          </div>
        </div>
      </li>
    );
  }
}

export default SortCommNodes;
