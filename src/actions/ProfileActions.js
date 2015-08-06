import alt from '../alt';

class ProfileActions {
  constructor() {
    this.generateActions(
      'getProfileInfoById'
    );
  }

  getProfileInfo(id) {
    this.actions.getProfileInfoById(id);
  }

  vote(sortId) {
    this.actions.getSortListVote();
  }
}

export default alt.createActions(ProfileActions);
