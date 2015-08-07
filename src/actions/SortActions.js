import ProfileData from '../data.json';

function getInfoById(id, votes) {
  return ProfileData.sortList.filter(item => {
    return id == item.id ? (function(){
      item.votes = votes;
      return item;
    }()) : false;
  })[0];
}

export default {
  getInfoById: getInfoById
};
