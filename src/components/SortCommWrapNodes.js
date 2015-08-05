import React from 'react';
import SortCommNodes from './SortCommNodes';

class SortCommWarpNodes extends React.Component {
  render() {
    return (
      <section className="page-list">
        <ul className="page-list-ul clearfloat">
          {this.props.data.map((item, index) => {
            return <SortCommNodes data={item}/>;
          })}
        </ul>
      </section>
    );
  }
}

export default SortCommWarpNodes;
