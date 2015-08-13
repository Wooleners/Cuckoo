import alt from '../alt';

class JoyActions {
  constructor() {
    this.generateActions(
      'getProfileInfoById'
    );
  }

  getJoyInfo(id) {
    this.actions.getProfileInfoById(id);
  }

  vote(sortId) {
    this.actions.getSortListVote();
  }
}

export default alt.createActions(JoyActions);
