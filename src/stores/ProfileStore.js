import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
  }

  onGetSortListSuccess(data) {

  }

  onGetSortListFail(errorMessage) {
    toastr.error(errorMessage);
  }

}


export default alt.createStore(ProfileStore);
