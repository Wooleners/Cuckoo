import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.sortList = [];
  }

  onGetSortListSuccess(data) {
    this.sortList = data;
  }

  onGetSortListFail(errorMessage) {
    toastr.error(errorMessage);
  }

}

export default alt.createStore(HomeStore);
