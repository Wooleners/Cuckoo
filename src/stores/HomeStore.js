import alt from '../alt';
import HomeActions from '../actions/HomeActions';
import SortActions from '../actions/SortActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.sortList = [];
  }

  onGetSortListSuccess(list) {

    this.sortList = list.sort((current, next) => {
      return next.votes - current.votes;
    }).map((item, index) => {
      return SortActions.getInfoById(item.id, item.votes);
    });
  }

  onGetSortListFail(errorMessage) {
    console.log(errorMessage);
  }

}


export default alt.createStore(HomeStore);
