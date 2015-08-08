import React from 'react';
import SortCommNodes from './SortCommNodes';

class SortCommWarpNodes extends React.Component {
  render() {
    var voteClick = this.props.onVoteClick;
    return (
      <section className="page-list">
        <ul className="page-list-ul clearfloat">
          {this.props.data.map((item, index) => {
            return <SortCommNodes onVoteClick={voteClick.bind(this, item)} imgSrc={item.imgSrc} votes={item.votes} id={item.id} index={index}/>;
          })}
        </ul>
      </section>
    );
  }
}

export default SortCommWarpNodes;
