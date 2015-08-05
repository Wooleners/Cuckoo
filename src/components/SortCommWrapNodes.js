import React from 'react';
import SortCommNodes from './SortCommNodes';

class SortCommWarpNodes extends React.Component {
  render() {
    return (
      <section className="page-list">
        <ul className="page-list-ul clearfloat">
          {this.props.data.map((item, index) => {
            return <SortCommNodes data={item} index={index + 2}/>;
          })}
        </ul>
      </section>
    );
  }
}

export default SortCommWarpNodes;
