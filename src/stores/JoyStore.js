import alt from '../alt';
import JoyActions from '../actions/JoyActions';
import ProfileData from '../data.json';

class JoyStore {
  constructor() {
    this.bindActions(JoyActions);
    this.profileInfo = {};
  }

  onGetProfileInfoById(id) {
    this.profileInfo = ProfileData.sortList.filter((item, index) => {
      return item.id == id;
    }).shift();
  }

}


export default alt.createStore(JoyStore);
