import React from 'react';
import SortCommNodes from './SortCommNodes';

class SortCommWarpNodes extends React.Component {
  render() {
    var voteClick = this.props.onVoteClick;
    return (
      <section className="page-list">
        <ul className="page-list-ul clearfloat">
          {this.props.data.map((item, index) => {
            return <SortCommNodes data={item} onVoteClick={voteClick} index={index + 2}/>;
          })}
        </ul>
      </section>
    );
  }
}

export default SortCommWarpNodes;
