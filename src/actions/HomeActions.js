import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'getSortListSuccess',
      'getSortListFail'
    );
  }

  getSortList() {

    this.actions.getSortListSuccess([{
      name: '阿虎',
      votes: '12394'
    }, {
      name: '阿飞',
      votes: '12344'
    }, {
      name: '阿思',
      votes: '12314'
    }, {
      name: '阿吖',
      votes: '12334'
    }, {
      name: '阿拉',
      votes: '12323'
    }]);
  }

  getSortListVote() {

    this.actions.getSortListSuccess([{
      name: '阿虎',
      votes: '123941'
    }, {
      name: '阿飞',
      votes: '123441'
    }, {
      name: '阿思',
      votes: '123141'
    }, {
      name: '阿吖',
      votes: '123341'
    }, {
      name: '阿拉',
      votes: '123231'
    }]);
  }

  vote(sortId) {

    this.actions.getSortListVote();
  }
}

export default alt.createActions(HomeActions);
