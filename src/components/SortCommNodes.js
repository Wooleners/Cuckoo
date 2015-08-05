import React from 'react';

class SortCommNodes extends React.Component {
  render() {
    return (
      <li>
        <div className="list-ul-div">
          <img src="/assets/eg.png" alt="placeholder+image" />
          <div className="imgbg"></div>
          <div className="subimgno">{this.props.index}</div>
          <div className="note">{this.props.data.votes}票</div>
          <div className="li-btn">
            <a className="icon active-btn-view" href=""></a>
            <a className="icon active-btn-vote"></a>
          </div>
        </div>
      </li>
    );
  }
}

export default SortCommNodes;
