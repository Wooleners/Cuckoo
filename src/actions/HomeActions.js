import alt from '../alt';
import request from 'reqwest';

class HomeActions {
  constructor() {
    this.generateActions(
      'getSortListSuccess',
      'getSortListFail'
    );
  }

  getSortList() {
    var getSortListSuccess = this.actions.getSortListSuccess,
        getSortListFail = this.actions.getSortListFail;

    request({
      url: 'http://life.dmzstg.pingan.com.cn/binfenxiari/kfjPlayerListInfo.do',
      type: 'jsonp',
      success: function(res){
        !(res.flag - 0) ? getSortListSuccess(res.list) : getSortListFail(res.msg);
      },
      fail: function(){
        getSortListFail();
      }
    });
  }

  getSortListVote() {

    this.actions.getSortListSuccess();
  }

  vote(sortId) {

    this.actions.getSortListVote();
  }
}

export default alt.createActions(HomeActions);
