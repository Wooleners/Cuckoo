var React = require('react'),
    SortList = require('./SortList'),
    data = [
      {
        name: '南阳人蒙文',
        votes: '26783'
      },
      {
        name: '东北人阿哲',
        votes: '15332'
      },
      {
        name: '上海人果冻',
        votes: '15433'
      },
      {
        name: '伟大的安徽人阿胖和含会',
        votes: '12343'
      },
      {
        name: '都是人',
        votes: '12231'
      }
    ];

//create exp node
var node = document.createElement('div');
document.body.appendChild(node);

React.render(
  React.createElement(SortList, {
    label: 'SortList',
    data: data
  }), node);
