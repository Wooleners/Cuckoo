import alt from '../alt';
import request from 'reqwest';

class HomeActions {
  constructor() {
    this.generateActions(
      'showDialog',
      'getSortListSuccess',
      'getSortListFail',
      'sendScoreSuccess',
      'argsVerifyFail',
      'sysException',
      'unLogin',
      'yetSentScore',
      'yetOverdue'
    );
  }

  getSortList() {
    request({
        url: 'http://life.pingan.com/binfenxiari/kfjPlayerListInfo.do',
        type: 'jsonp'
      })
      .then((res) => {
        !(res.flag - 0) ? this.actions.getSortListSuccess(res.list): this.actions.getSortListFail(res.msg);
      })
      .fail(() => {
        this.actions.getSortListFail("请求失败")
      });
  }

  getSortListVote() {

    this.actions.getSortListSuccess();
  }

  showDialog(type) {
    this.actions.showDialog(type);
  }

  vote(sortId) {
    var flagsTemp = [{
      flag: 0,
      callback: function() {
        this.actions.sendScoreSuccess();
        this.actions.showDialog('sendScoreSuccess');
        //again get sortlist
        this.actions.getSortList();
      }
    }, {
      flag: 1,
      callback: function() {
        this.actions.argsVerifyFail();
        this.actions.showDialog('argsVerifyFail');
      }
    }, {
      flag: 2,
      callback: function() {
        this.actions.unLogin();
        this.actions.showDialog('unLogin');
        this.actions.getSortList();
        localStorage.setItem('pashow', true);
      }
    }, {
      flag: -1,
      callback: function() {
        this.actions.sysException();
        this.actions.showDialog('sysException');
      }
    }, {
      flag: 4,
      callback: function() {
        this.actions.yetSentScore();
        this.actions.showDialog('yetSentScore');
      }
    }, {
      flag: 5,
      callback: function() {
        this.actions.yetOverdue();
        this.actions.showDialog('yetOverdue');
      }
    },{
      flag: 'a04',
      callback: function() {
        this.actions.yetSentScore();
        this.actions.showDialog('yetSentScore');
      }
    }];
    request({
        url: 'http://life.pingan.com/binfenxiari/kfjPlayerVote.do',
        type: 'jsonp',
        data: {
          activeType: "2030",
          answerResult: sortId,
          source: "app"
        }
      })
      .then((res) => {
        flagsTemp.forEach((item, index) => {
          item.flag == res.flag ? item.callback.bind(this)() : false;
        })
      })
      .fail(() => {
        console.log("请求失败");
      });
  }
}

export default alt.createActions(HomeActions);
