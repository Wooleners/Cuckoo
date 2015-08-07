import alt from '../alt';
import ProfileActions from '../actions/ProfileActions';
import ProfileData from '../data.json';

class ProfileStore {
  constructor() {
    this.bindActions(ProfileActions);
    this.profileInfo = {};
  }

  onGetProfileInfoById(id) {
    this.profileInfo = ProfileData.sortList.filter((item, index) => {
      return item.id == id;
    }).shift();
  }

}


export default alt.createStore(ProfileStore);
