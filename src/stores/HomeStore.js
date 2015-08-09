import alt from '../alt';
import React from 'react';
import Dialog from '../components/Dialog';
import HomeActions from '../actions/HomeActions';
import SortActions from '../actions/SortActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.sortList = [];
  }

  onShowDialog(type){
    var container = document.createElement('div');
    var wrapId = container.id = "pas-dialog-wrap-" + Math.floor(Math.random(10) * 100);
    document.body.appendChild(container);
    this.setState({
      visibleWarp: wrapId
    });
    var dialog = React.render(<Dialog visible="true" type={type} onClose={this.handleClose.bind(this)}></Dialog>, container);
    return dialog;
  }

  handleClose(){
    document.querySelector("#" + this.visibleWarp).remove();
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

  onSendScoreSuccess() {

  }

  onArgsVerifyFail() {

  }

  onSysException() {

  }

  onUnlogin() {

  }

  onYetSentScore() {

  }

  onYetOverdue() {

  }

}


export default alt.createStore(HomeStore);
